const numeros = [1, 4, 5, 2, 3, 7, 6, 10, 9, 8];

/**
 * Função de declarativa com reduce
 */
const somar = (array) => array.reduce((a, b) => a + b);

/**
 * Função de soma recursiva
 */
const somarRecursivo = (array, total = 0) => {
    if (array.length === 0) {
        return total;
    }
    return somarRecursivo(array.slice(1), total + array[0]);
};

console.log(somar(numeros));
console.log(somarRecursivo(numeros));
