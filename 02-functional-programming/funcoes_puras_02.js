/**
 * Função impura, pois ela usa recursos externos, como a funcão Math.random,
 * e o valor de retorno dela não é determinado pelos parametros de entrada, 
 * já que são gerados numeros aleatórios.
 */
function gerarNumeroAleatorio(max, min) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}


console.log(gerarNumeroAleatorio(10, 100))