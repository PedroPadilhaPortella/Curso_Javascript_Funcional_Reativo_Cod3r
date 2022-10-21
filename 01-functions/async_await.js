function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const valor = parseInt(Math.random() * fator) + min;

    if (numerosProibidos.includes(valor)) {
      reject("Numero repetido");
    } else {
      resolve(valor);
    }
  });
}

async function gerarMegaSena(quantidade) {
    try {

        const numeros = [];
        for (let _ of Array(quantidade).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros;
    } catch(err) {
        return gerarMegaSena(quantidade)
    }
}

gerarMegaSena(10).then(console.log).catch(console.log)
