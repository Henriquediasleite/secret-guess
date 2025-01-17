const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()

console.log(numeroSecreto)
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1) 
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.textContent = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.textContent = maiorValor