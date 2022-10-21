const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'dados.txt');

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}



fs.readFile(filepath, { }, exibirConteudo);