 // Carrossel
    const carrossel = document.getElementById('carrossel');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    nextBtn.addEventListener('click', () => {
      carrossel.scrollBy({ left: 300, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      carrossel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // Envio do formulário via fetch (AJAX) para não recarregar a página
    const form = document.getElementById('form-contato');
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Evita envio tradicional e recarregamento

      const formData = {
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        mensagem: form.mensagem.value
      };

      try {
        const response = await fetch('/contato', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.status === 'sucesso') {
          alert('Email enviado com sucesso!');
          form.reset();
        } else {
          alert('Erro ao enviar o email.');
        }
      } catch (error) {
        alert('Erro ao enviar o email.');
        console.error(error);
      }
    });