const letras = [["o", "l", "a"], [" "], [["m", ["u"]], "n", "d", "o"]];

const resultado = letras
    .flat(3)
    .map((letra) => letra.toUpperCase())
    .reduce((a, b) => a + b);

console.log(resultado);
