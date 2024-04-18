const form = document.getElementById('submit-form');
const numberA = document.getElementById('number-a');
const numberB = document.getElementById('number-b');

const containerMsgSucess = document.querySelector('.success-message');
const containerMsgError = document.querySelector('.error-message');


form.addEventListener('submit', function(e){
    e.preventDefault();
    var valorA = numberA.value;
    var valorB = numberB.value;
    const msgSucess = `O numero <b>${valorB}</b> é maior que <b>${valorA}</b>. <b>Teste aprovado</b>!`
    const msgError = `O numero <b>${valorB}</b> é menor que <b>${valorA}</b>. <b>Você Fracassou</b>!`
    if(valorA < valorB){
        containerMsgSucess.innerHTML = msgSucess;
        containerMsgSucess.style.display = 'block';

        containerMsgError.style.display = 'none'
        
    } else {
        containerMsgError.classList.add('error');
        containerMsgError.innerHTML = msgError;
        containerMsgError.style.display = 'block';

        containerMsgSucess.style.display = 'none'
    }
});