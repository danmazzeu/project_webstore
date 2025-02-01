const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const email = 'danmazzeu9@gmail.com'
const password = "fpgq mbja jnkv ejws"

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
});

app.use(express.urlencoded({ extended: true }));

// Usage
// https://codesnode-production.up.railway.app/sendmail?message=teste

app.get('/sendmail', (req, res) => {
  const { to, subject, message } = req.query;

  const mailOptions = {
    from: email,
    to: email,
    subject: 'Hacking',
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        message: 'Error sending email',
        erro: error.message,
        errorDetails: error
      });
    } else {
      console.log('Email sent:', info.response);
      res.json({ message: 'Email sent successfully', info: info.response });
    }
  });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});