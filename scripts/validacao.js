function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTM += '<div>Valor inválido</div>'
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTM += `<div.Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}  

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}