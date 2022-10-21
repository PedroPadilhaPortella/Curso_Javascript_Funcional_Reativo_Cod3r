function funcionaOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro");
      } else {
        resolve(valor);
      }
    } catch (err) {
      reject(err);
    }
  });
}

funcionaOuNao("200 - OK", 0.9).then(console.log).catch(console.log);
