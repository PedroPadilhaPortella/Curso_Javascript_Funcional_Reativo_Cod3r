/**
 * Passagem de Funções como parametro para outras funções
 */

function doSomething(fn, arg) {
  if (typeof fn == "function") {
    fn(arg);
  }
}

function showName(name) {
  console.log("Meu nome é", name);
}

doSomething(showName, "Pedro");
doSomething("Not a function", "Pedro");

/**
 * Retornar uma função a partir de outra função
 */

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

console.log(potencia(3)(3));