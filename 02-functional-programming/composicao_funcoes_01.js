function composicao(...fns) {
    return function (valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    };
}

const gritar = (texto) => texto.toUpperCase();

const enfatizar = (texto) => `${texto}!!`;

const tornarLento = (texto) => texto.split("").join(" ");

const exagerar = composicao(gritar, enfatizar, tornarLento);
const menosExagerado = composicao(enfatizar, tornarLento);

console.log(exagerar("cuidado com o buraco"));
console.log(menosExagerado("relaxa"));
