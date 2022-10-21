function gerarNumerosEntre(min, max, tempo) {
  if (min > max) [max, min] = [min, max];

  return new Promise((resolve) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const valor = parseInt(Math.random() * fator) + min;
      resolve(valor);
    }, tempo);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(10, 20, 1000),
    gerarNumerosEntre(100, 200, 100),
    gerarNumerosEntre(1, 100, 2000),
    gerarNumerosEntre(0, -2, 3000),
  ]);
}

console.time("promise");

gerarVariosNumeros()
  .then((numeros) => console.log(numeros))
  .then(() => console.timeEnd("promise"));
