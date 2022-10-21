/**
 * Desafio
 * Criar uma função somar que execute dessa maneira
 * somar(3)(4)(5)
 * E a função calcular que recebe os valores e a operação
 * calcular(3)(4)(fn)
 */

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

function calcular(a) {
  return function (b) {
    return function (fn) {
      if (typeof fn == "function") {
        return fn(a, b);
      }
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

const soma = somar(3)(4)(5);
console.log("Soma:", soma);

const resultado = calcular(3)(4)(subtrair);
console.log("Resultado:", resultado);
