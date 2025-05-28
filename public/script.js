// Carrossel simples
let index = 0;
const membros = document.querySelectorAll('.membro');

document.getElementById('nextBtn').addEventListener('click', () => {
  if (index < membros.length - 1) index++;
  atualizarCarrossel();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (index > 0) index--;
  atualizarCarrossel();
});

function atualizarCarrossel() {
  membros.forEach((membro, i) => {
    membro.style.display = i === index ? 'block' : 'none';
  });
}

atualizarCarrossel();

// Validações do formulário
document.getElementById('formContato').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const status = document.getElementById('mensagemStatus');

  // Validação do nome: mínimo 3 caracteres, apenas letras e espaços
  const nomeRegex = /^[A-Za-zÀ-ÿ\s]{3,}$/;
  if (!nomeRegex.test(nome)) {
    status.innerText = "O nome deve conter no mínimo 3 letras e apenas texto.";
    return;
  }

  // Validação do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.innerText = "Por favor, insira um email completo e válido.";
    return;
  }

  // Validação do telefone: exatamente 11 números
  const telefoneNumeros = telefone.replace(/\D/g, '');
  if (!/^\d{11}$/.test(telefoneNumeros)) {
    status.innerText = "O telefone deve conter exatamente 11 números (com DDD).";
    return;
  }

  // Validação da mensagem
  if (mensagem.length === 0) {
    status.innerText = "A mensagem não pode estar vazia.";
    return;
  }

  // Enviar dados para o servidor
  try {
    const res = await fetch('/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, telefone, mensagem })
    });

    const data = await res.json();
    status.innerText = data.mensagem || "Mensagem enviada com sucesso!";
    document.getElementById('formContato').reset();
  } catch (err) {
    status.innerText = "Erro ao enviar mensagem.";
  }
});
