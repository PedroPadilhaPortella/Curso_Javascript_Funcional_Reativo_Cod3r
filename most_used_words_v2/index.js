const path = require("path");
const funcoes = require("./funcoes");
const _ = require("lodash");

const { toArray, map, groupBy, mergeMap, reduce } = require("rxjs/operators");

const caminho = path.join(__dirname, "legendas");

const simbolos = [".", "?", "!", "-", "_", '"', ",", "♪", "<i>", "</i>", "\r", "[", "]", "(", ")",];

funcoes
    .lerDiretorio(caminho)
    .pipe(
        funcoes.getElementosTerminadosEm(".srt"),
        funcoes.lerArquivo(),
        funcoes.separarPor("\n"),
        funcoes.removerLinhasVazias(),
        funcoes.removerNumeros(),
        funcoes.removerSimbolos(simbolos),
        funcoes.separarPor(" "),
        funcoes.removerLinhasVazias(),
        funcoes.removerNumeros(),
        groupBy(el => el.toLowerCase()),
        mergeMap(grupo => grupo.pipe(toArray())),
        map(palavras => ({elemento: palavras[0], quantidade: palavras.length})),
        toArray(),
        map(array => _.sortBy(array, el => -el.quantidade))
    )
    .subscribe(console.log);


// funcoes
//     .lerDiretorio(caminho)
//     .pipe(
//         funcoes.getElementosTerminadosEm(".srt"),
//         funcoes.lerArquivo(),
//         funcoes.separarPor("\n"),
//         funcoes.removerLinhasVazias(),
//         funcoes.removerNumeros(),
//         funcoes.removerSimbolos(simbolos),
//         funcoes.separarPor(" "),
//         funcoes.removerLinhasVazias(),
//         funcoes.removerNumeros(),
//         toArray(),
//         funcoes.agruparPalavras(),
//         map(array => _.sortBy(array, el => -el.quantidade))
//     )
//     .subscribe(console.log);
