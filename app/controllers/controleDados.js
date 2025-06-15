import nodemailer from 'nodemailer';

export async function form(req, res) {
  const { nome, email, telefone, mensagem } = req.body;

  // Configurar o transporter SMTP do Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'trinity.inova@gmail.com',          // seu email
      pass: 'ogac anlo vkyr rppo',    // sua senha ou app password do Gmail
    },
  });

  const mailOptions = {
    from: email,                           // quem enviou (email do usuário)
    to: 'trinity.inova@gmail.com',        // para onde quer enviar
    subject: `Contato pelo site - ${nome}`,
    text: `
      Nome: ${nome}
      Email: ${email}
      Telefone: ${telefone}
      Mensagem: ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: 'sucesso', mensagem: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ status: 'erro', mensagem: 'Erro ao enviar email' });
  }
}
