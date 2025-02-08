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

const IP_BLOCK_FILE = 'blocked_ips.json';
let blockedIPs = loadBlockedIPs();

function loadBlockedIPs() {
    try {
        const data = fs.readFileSync(IP_BLOCK_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
}

function saveBlockedIPs() {
    fs.writeFileSync(IP_BLOCK_FILE, JSON.stringify(blockedIPs, null, 2), 'utf8');
}

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usage 
// https://codesnode-production.up.railway.app/sendmail?message=hello
app.post('/sendmail', (req, res) => {
    let message;

    if (!ip) {
        return res.status(400).send("Could not determine IP address.");
    }

    if (blockedIPs[ip] && blockedIPs[ip].blocked) {
        console.log(`IP ${ip} is blocked - redirecting to Google.`);
        return res.redirect('https://www.google.com');
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
            console.error('Error sending email:', error);

            if (!blockedIPs[ip]) {
                blockedIPs[ip] = { attempts: 0, blocked: false };
            }
            blockedIPs[ip].attempts++;

            if (blockedIPs[ip].attempts >= 3) {
                blockedIPs[ip].blocked = true;
                console.log(`IP ${ip} blocked.`);
            }
            saveBlockedIPs(); // Save the updated blocked IPs to file
            return res.status(500).json({ error: 'Error sending email', details: error.message });
        } else {
            console.log('Email sent:', info.response);
            if (blockedIPs[ip]) {
                delete blockedIPs[ip]; // Remove from attempts if successful
                saveBlockedIPs(); // Save the updated blocked IPs to file
            }
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
          console.error("Error decrypting:", error);
          res.status(500).send("Decryption failed.  Incorrect message format or key.");
    }
});

app.listen(3000, () => {
    console.log('Server on port 3000');
});