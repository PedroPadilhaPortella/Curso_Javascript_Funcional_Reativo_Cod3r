const path = require('path')
const funcoes = require('./funcoes')

const caminho = path.join(__dirname, 'legendas');

const simbolos = ['.', '?', '!', '-', '_', '"', ',', '♪', '<i>', '</i>', '\r', '[', ']', '(', ')']

funcoes.lerDiretorio(caminho)
    .then(funcoes.getElementosTerminadosEm('.srt'))
    .then(funcoes.lerArquivos)
    .then(funcoes.mesclarPor('\n'))
    .then(funcoes.separarPor('\n'))
    .then(funcoes.removerLinhasVazias)
    .then(funcoes.removerPadrao('-->'))
    .then(funcoes.removerNumeros)
    .then(funcoes.removerSimbolos(simbolos))
    .then(funcoes.mesclarPor(' '))
    .then(funcoes.separarPor(' '))
    .then(funcoes.removerLinhasVazias)
    .then(funcoes.removerNumeros)
    .then(funcoes.agruparPalavras)
    .then(funcoes.ordenarPor('quantidade', 'desc'))
    .then(console.log)