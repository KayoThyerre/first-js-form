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

const btnEnviar = document.querySelector('.btn');
const errorMessage = document.querySelectorAll('.obrigatorio');

console.log(errorMessage)

btnEnviar.addEventListener('click', function() {
    if (inputValid.value.trim() === "") {
        errorMessage.style.display = "block";
        input.classList.add('preenchido');
    } else {
        errorMessage.style.display = "none";
        input.classList.remove('preenchido');
    }
});