const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');

const app = express();
const email = 'lumniphone@gmail.com';
const password = "xpyh uuzj lggt xwgm";
const ENCRYPTION_KEY = crypto.randomBytes(32).toString('hex');

const allowedOrigins = [
  'https://danmazzeu.github.io',
  'http://localhost:3000',
  'https://www.google.com/',
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

function encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
    const textParts = text.split(':');
    const iv = Buffer.from(textParts.shift(), 'hex');
    const encryptedText = Buffer.from(textParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: email,
        pass: password,
    },
});

const ipAttempts = new Map(); // Store IP addresses and attempt counts

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usage 
// https://codesnode-production.up.railway.app/sendmail?message=hello
app.post('/sendmail', (req, res) => {
    let message;

    const ip = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
    if (!ip) {
        return res.status(400).send("Could not determine IP address.");
    }

    let attempts = ipAttempts.get(ip) || 0;

    if (attempts >= 3) {
        //console.log(`IP ${ip} blocked - redirecting to Google.`);
        return res.redirect('');
    }

    if (req.body.message) {
        message = req.body.message;
    } else if (req.body) {
        message = "";
        for (const key in req.body) {
            message += key + ": " + req.body[key] + "<br>";
        }
    } else {
        return res.status(400).json({ error: "No message data provided" });
    }

    const encryptedMessage = encrypt(message);

    const mailOptions = {
        from: email,
        to: email,
        subject: 'Lumni Message',
        text: encryptedMessage
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            //console.error('Error sending email:', error);
            attempts++;
            ipAttempts.set(ip, attempts); 
            return res.status(500).json({ error: 'Error sending email', details: error.message });
        } else {
            //console.log('Email sent:', info.response);
            attempts++;
            ipAttempts.set(ip, attempts); 
            return res.json({ message: 'Email sent successfully', info: info.response, encryptedMessage });
        }
    });
});

// Usage 
// https://codesnode-production.up.railway.app/decrypt?message=chave:mensagem_criptografada
app.get('/decrypt', (req, res) => {
    const { message } = req.query;
    try {
          if (!message) {
              return res.status(400).send("Message parameter is missing")
          }
          const decryptedMessage = decrypt(message);
          res.send(`${decryptedMessage}`);

    } catch (error) {
          //console.error("Error decrypting:", error);
          res.status(500).send("Decryption failed.  Incorrect message format or key.");
    }
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});