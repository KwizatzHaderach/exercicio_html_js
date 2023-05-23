const form = document.getElementById('validar');

    form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);

    const mensagemSucesso = `<b>${valor2} é um número maior que ${valor1}!</b>`;
    const mensagemFalha = `<b>${valor2} não é um número maior que ${valor1}!</b>`;

    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemFalha = document.querySelector('.falha-message');

    if (valor2 > valor1) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemFalha.style.display = 'none';

    } else {
        containerMensagemFalha.innerHTML = mensagemFalha;
        containerMensagemFalha.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
    });