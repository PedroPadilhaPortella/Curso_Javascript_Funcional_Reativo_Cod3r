/**
 * Arrow Functions
 */

const saudacao = (nome) => console.log("Bom dia", nome);
saudacao("Pedro");

/**
 * Arrow function que executa outra arrow function
 */

// function somar(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

const somar = (a) => (b) => (c) => a + b + c;
console.log(somar(3)(4)(-1));

/**
 * Utilizando Prototype para extender tipos em javascript
 * **NÃO FUNCIONA EM ARROW FUNCTION PORQUE ARROW FUNCTION NÃO TEM CONTEXTO LÉXICO 'THIS'
 */

Array.prototype.log = function () {
  console.log(this);
};

Array.prototype.sum = function () {
  sum = 0;
  this.forEach((el) => {
    sum += el;
  });
  console.log(sum);
};

const numeros = [1, 2, 3, 4];
numeros.log();
numeros.sum();
