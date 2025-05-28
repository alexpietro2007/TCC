const express = require("express")
const path = require("path")

const app = express();
const PORT = 3000;

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint de envio do formulário
app.post('/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body;

  console.log("Dados recebidos do formulário:");
  console.log({ nome, email, telefone, mensagem });

  // Simula um envio com sucesso
  res.json({ status: 'sucesso', mensagem: 'Mensagem enviada com sucesso!' });
});

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'))
})

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
