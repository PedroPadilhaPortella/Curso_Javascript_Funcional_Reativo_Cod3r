const path = require('path')
const funcoes = require('./funcoes')

const caminho = path.join(__dirname, 'legendas');

const simbolos = ['.', '?', '!', '-', '_', '"', ',', '♪', '<i>', '</i>', '\r', '[', ']', '(', ')']

/**
 * Desafio de composição com Promises
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

const palavrasMaisUsadas = composicao(
    funcoes.lerDiretorio,
    funcoes.getElementosTerminadosEm('.srt'),
    funcoes.lerArquivos,
    funcoes.mesclarPor('\n'),
    funcoes.separarPor('\n'),
    funcoes.removerLinhasVazias,
    funcoes.removerPadrao('-->'),
    funcoes.removerNumeros,
    funcoes.removerSimbolos(simbolos),
    funcoes.mesclarPor(' '),
    funcoes.separarPor(' '),
    funcoes.removerLinhasVazias,
    funcoes.removerNumeros,
    funcoes.agruparPalavras,
    funcoes.ordenarPor('quantidade', 'desc'),
);

palavrasMaisUsadas(caminho).then(console.log)