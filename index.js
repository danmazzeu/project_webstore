const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');
const session = require('express-session');

const app = express();
const email = 'lumniphone@gmail.com';
const password = "xpyh uuzj lggt xwgm"; // Store this securely!
const ENCRYPTION_KEY = crypto.randomBytes(32).toString('hex'); // Generate ONCE and store securely!

// Session Secret - MUST be long and random.  Don't hardcode in production!
const SESSION_SECRET = process.env.SESSION_SECRET || crypto.randomBytes(64).toString('hex');

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Important for HTTPS in production
}));

const contadorVisitas = (req, res, next) => {
    req.session.visitas = (req.session.visitas || 0) + 1; // Cleaner way to increment

    if (req.session.visitas > 4) {
        return res.redirect('https://www.google.com'); // Add 'return' to stop further processing
    }
    next();
};

const allowedOrigins = [
    'https://danmazzeu.github.io',
    'http://localhost:3000', // Include BOTH http:// and https:// if needed
    'http://127.0.0.1:3000', // Sometimes localhost resolves to this
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) { // Allow requests with no origin (like Postman)
            callback(null, true);
        } else {
            console.error("CORS Error: Origin not allowed:", origin); // Log the bad origin
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

app.use(contadorVisitas);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usage 
// https://codesnode-production.up.railway.app/sendmail?message=hello
app.post('/sendmail', (req, res) => {
    let message;

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
            return res.status(500).json({ error: 'Error sending email', details: error.message });
        } else {
            //console.log('Email sent:', info.response);
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