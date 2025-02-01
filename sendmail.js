const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "danmazzeu9@gmail.com",
    pass: "fpgq mbja jnkv ejws",
  },
});

function enviarEmail(destinatario, assunto, mensagem) {
  const mailOptions = {
    from: 'danmazzeu9@gmail.com',
    to: destinatario,
    subject: assunto,
    text: mensagem
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erro ao enviar email:', error);
        reject({ mensagem: 'Erro ao enviar email', erro: error.message, errorDetails: error });
      } else {
        console.log('Email sent:', info.response);
        resolve({ mensagem: 'Email enviado com sucesso', info: info.response });
      }
    });
  });
}

module.exports = { enviarEmail };