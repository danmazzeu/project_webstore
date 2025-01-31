const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.mail.yahoo.com",
  port: 465,
  secure: true, // use TLS
  auth: {
    user: "danmazzeu9@yahoo.com",
    pass: "%448600%55Dd",
  },
});

// Middleware para interpretar os dados da URL (query string)
app.use(express.urlencoded({ extended: true })); // Habilita a interpretação de query string

app.get('/enviar_email', (req, res) => { // Mudança para app.get
  const { destinatario, assunto, mensagem } = req.query; // Dados da URL

  const mailOptions = {
    from: 'danmazzeu9@yahoo.com',
    to: 'danmazzeu9@gmail.com', // Usa o destinatário da URL
    subject: 'oi', // Usa o assunto da URL
    text: 'teste' // Usa a mensagem da URL
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ mensagem: 'Erro ao enviar email' });
    } else {
      console.log('Email enviado:', info.response);
      res.json({ mensagem: 'Email enviado com sucesso' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});