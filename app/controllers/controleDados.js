export async function form(req, res) {
    const { nome, email, telefone, mensagem } = req.body

    console.log("Dados recebidos do formulário:");
    console.log({ nome, email, telefone, mensagem });

    // Simula um envio com sucesso
    res.json({ status: 'sucesso', mensagem: 'Mensagem enviada com sucesso!' });
}