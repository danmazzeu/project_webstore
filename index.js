import express from 'express';
import { enviarEmail } from './sendmail.mjs';

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/enviar_email', async (req, res) => {
  const { destinatario, assunto, mensagem } = req.query;

  try {
    const resultado = await enviarEmail(destinatario, assunto, mensagem);
    res.json(resultado);
  } catch (erro) {
    res.status(500).json(erro);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});