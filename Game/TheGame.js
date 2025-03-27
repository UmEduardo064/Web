const ran = Math.floor(Math.random() * 200) + 1;
console.log("Número secreto (para teste):", ran);

function verification() {
    const numberUser = parseInt(document.getElementById('numero').value);
    const mensDica = document.getElementById('maiormenor');
    const mensResultado = document.getElementById('resultado');

    // Limpar mensagens anteriores
    mensDica.textContent = '';
    mensResultado.textContent = '';

    if (ran === numberUser) {
        mensResultado.textContent = 'Acertou';
        mensResultado.style.color = 'green';
        mensDica.textContent = "";    
    } else if (ran < numberUser) {
        mensResultado.textContent = "Tente Novamente!";
        mensResultado.style.color = 'red';
        mensDica.textContent = "O numero e menor que --> " + numberUser;
        mensDica.style.color = 'yellow';
    } else {
        mensResultado.textContent = "Tente Novamente!";
        mensResultado.style.color = 'red';
        mensDica.textContent = "O numero e maior que --> " + numberUser;
        mensDica.style.color = 'yellow';
    }
}

// Math.random():  Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
// Multiplicar por 200:  gera um número entre 0 (inclusive) e 200 (exclusive).
// Math.floor():  Arredonda o número para baixo, removendo a parte decimal.
// Adicionar + 1:  Ajusta o intervalo para 1 a 200 (em vez de 0 a 199).
