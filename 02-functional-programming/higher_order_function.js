/**
 * Higher Order Function define 
 * funções que podem receber uma ou mais funções como argumentos, 
 * e podem retornar funções como seu resultado.
 * Nem todas as linguagens de programação suportam isso, mas o Javascript sim.
 */

function executar(fn, ...params) {
    return function(texto) {
        return `${texto} ${fn(...params)}`
    }
}

function somar(a, b) {
    return a + b
}

function multiplicar(a, b) {
    return a * b
}

console.log(executar(somar, 10, 12)('O resultado da soma é'))
console.log(executar(multiplicar, 10, 12)('O resultado do produto é'))