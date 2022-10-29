/**
 * First Class Function define 
 * quando a linguagem trata funções como variáveis, 
 * podendo armazerar funções em variáveis, passar como parametro, etc.
 */

const x = 3

const y = function(x) {
    return x * x
}

console.log(x)
console.log(y(x))