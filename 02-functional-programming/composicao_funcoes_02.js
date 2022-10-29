/**
 * Composição de funções com Promises
 */

function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc);
            } else {
                return fn(acc);
            }
        }, valor);
    };
}

const gritar = (texto) => texto.toUpperCase();

const enfatizar = (texto) => `${texto}!!`;

const tornarLento = (texto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(texto.split("").join(" "));
        }, 3000);
    });
};

const exagerar = composicao(gritar, enfatizar, tornarLento);
const menosExagerado = composicao(enfatizar, tornarLento);

exagerar("cuidado com o buraco").then(console.log);
menosExagerado("relaxa").then(console.log);
