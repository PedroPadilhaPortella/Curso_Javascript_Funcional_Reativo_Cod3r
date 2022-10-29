/**
 * Functors são objetos que implementam a função map,
 * e funcionam como um Wrapper de valores
 */

// Arrays são exemplos de Functors
const numeros = [1, 2, 3];
const dobroMenos1 = numeros.map((n) => n * 2).map((n) => n + 1);
console.log(numeros, dobroMenos1);

function tipoSeguro(valor) {
    return {
        valor,
        invalido() {
            return this.valor === null || this.valor === undefined;
        },
        map(fn) {
            if (this.invalido()) {
                return tipoSeguro(null);
            } else {
                const novoValor = fn(this.valor);
                return tipoSeguro(novoValor);
            }
        },
        flatMap(fn) {
            return this.map(fn).valor;
        },
    };
}

const resultado = tipoSeguro("eins zwei drei vier funf")
    // .map((texto) => null)
    .map((texto) => texto.toUpperCase())
    .flatMap((texto) => texto.split(" ").join(", "));

console.log(resultado);
