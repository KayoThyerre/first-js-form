const inputValid = document.querySelectorAll('.input, .input-text');

console.log(inputValid)

inputValid.forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value !== "") {
            input.classList.add('preenchido');
        } else {
            input.classList.remove('preenchido');
        }
    });
});