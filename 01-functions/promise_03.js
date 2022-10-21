/**
 * Callback Hell
 */


function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max];
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const valor = parseInt(Math.random() * fator) + min
        resolve(valor)
    })
}


gerarNumerosEntre(10, 20)
    .then(console.log);
