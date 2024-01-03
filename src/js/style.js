const inputValid = document.querySelectorAll('.input, .input-text');

inputValid.forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value !== "") {
            input.classList.add('preenchido');
        } else {
            input.classList.remove('preenchido');
        }
    });
});

const buttonEnviar = document.querySelector('.btn');

buttonEnviar.addEventListener('click', function() {
    const inputs = document.querySelectorAll('.input input, .input-text textarea');

    inputs.forEach(function(input) {
        const obrigatorioMessage = input.nextElementSibling;
        
        if (input.value.trim() === '') {
            obrigatorioMessage.style.display = 'block';
            input.classList.add('error');
        } else {
            obrigatorioMessage.style.display = 'none';
            input.classList.remove('error');
        }
    });
});
