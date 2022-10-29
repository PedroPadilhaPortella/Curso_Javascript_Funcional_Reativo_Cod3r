/**
 * Currying
 * Currying é o processo de transformar uma função que espera vários argumentos
 * em uma função que espera um único argumento e retorna outra função curried.
 * Por exemplo, uma função que recebe três argumentos, ao sofrer currying,
 * resulta em uma função que recebe um argumento e retorna uma função que recebe um argumento,
 * que por sua vez retorna uma função que recebe um argumento e
 * retorna o resultado da função original.
 */

// EXEMPLO
function produto(a) {
    return function (b) {
        return a * b;
    };
}
var dobro = produto(2);
console.log(dobro(8));
console.log(produto(2)(6));


function textoComTamanhoEntre(min) {
    return function (max) {
        return function (erro) {
            return function (texto) {
                //Lazy Evaluation
                const tamanho = (texto || "").trim().length;
                if (tamanho < min || tamanho > max) {
                    throw erro;
                }
                return `'${texto}' tem ${tamanho} caracteres`;
            };
        };
    };
}

const setErro = textoComTamanhoEntre(2)(20);
const checarTamanho = setErro("Nome inválido");
console.log(checarTamanho("pedro"));