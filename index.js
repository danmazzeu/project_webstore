const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json()); // Middleware para interpretar JSON no corpo da requisição

// Configuração do Nodemailer (substitua com suas credenciais)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou outro serviço de email
  auth: {
    user: 'danmazzeu9@gmail.com',
    pass: '%448600%55Dd'
  }
});

app.post('/enviar_email', (req, res) => {
  const { destinatario, assunto, mensagem } = req.body;

  const mailOptions = {
    from: 'danmazzeu9@gmail.com',
    to: 'danmazzeu9@gmail.com',
    subject: 'subject',
    text: 'teste'
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