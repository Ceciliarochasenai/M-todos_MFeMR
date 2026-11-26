const botao = document.getElementById("sortear");
const result = document.getElementById("result");

botao.addEventListener("click", function() {

    let numero = Math.floor(Math.random() * 100) + 1;

    result.innerHTML = "Número sorteado: " + numero;

});






