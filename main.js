const formA = document.getElementById('formulario');
const numeroA = document.getElementById('numeroA');
const numeroB = document.getElementById('numeroB');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');

function math() {
    return parseFloat(numeroB.value) > parseFloat(numeroA.value);
}

formA.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formEValido = math();
    const mensagemSucesso = `O Campo B é maior que o Campo A`;
    const mensagemErro = `O Campo B não é maior que o Campo A`;
    
    const menErro = document.querySelector('.error-message');
    const sucesso = document.querySelector('.success-message');
    
    
    if (!formEValido) {
        menErro.innerHTML = mensagemErro;
        menErro.style.display = 'block';
        sucesso.style.display = 'none';
    } else {
        sucesso.innerHTML = mensagemSucesso;
        sucesso.style.display = 'block';
        menErro.style.display = 'none';
    }
});
