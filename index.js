const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: true, // use TLS
  auth: {
    user: "danmazzeu9@gmail.com",
    pass: "fpgq mbja jnkv ejws",
  },
});

// Middleware para interpretar os dados da URL (query string)
app.use(express.urlencoded({ extended: true })); // Habilita a interpretação de query string

app.get('/enviar_email', (req, res) => { // Mudança para app.get
  const { destinatario, assunto, mensagem } = req.query; // Dados da URL

  const mailOptions = {
    from: 'danmazzeu9@gmail.com',
    to: 'danmazzeu9@gmail.com', // Usa o destinatário da URL
    subject: 'Assunto', // Usa o assunto da URL
    text: mensagem // Usa a mensagem da URL
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        mensagem: 'Erro ao enviar email',
        erro: error.message, // Include the error message
        errorDetails: error // Include the whole error object (for debugging)
      });
    } else {
      console.log('Email sent:', info.response);
      res.json({ mensagem: 'Email enviado com sucesso', info: info.response });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});