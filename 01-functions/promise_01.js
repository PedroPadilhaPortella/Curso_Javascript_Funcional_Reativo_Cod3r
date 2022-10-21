const nomes = ["Pedro", "Samuel", "Daniel"];

let promise = new Promise(function (resolve) {
  resolve(nomes);
});

promise
  .then((nomes) => nomes[0])
  .then((nome) => nome.toUpperCase())
  .then(console.log);
