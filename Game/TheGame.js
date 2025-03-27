// Math.random():  Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
// Multiplicar por 200:  gera um número entre 0 (inclusive) e 200 (exclusive).
// Math.floor():  Arredonda o número para baixo, removendo a parte decimal.
// Adicionar + 1:  Ajusta o intervalo para 1 a 200 (em vez de 0 a 199).

const ran = Math.floor(Math.random() * 200) + 1;


function verification() {

const numberUser = document.getElementById('numero').value;
const mensMaiorMenor = document.getElementById('maiormenor');
const mensCorreto = document.getElementById('resut');

// Limpar mensagens anteriores
mensMaiorMenor.textContent = '';
mensCorreto.textContent = '';

if( ran == numberUser){
    mensCorreto.textContent = 'Acertou';
    mensCorreto.style.color = 'green';    
}else if(ran < numberUser) {
    mensCorreto.textContent = "numero maior"
    mensCorreto.style.color = 'red';
}else if(ran > numberUser){
    mensCorreto.textContent = "numero menor"
    mensCorreto.style.color = 'red';
}
}
