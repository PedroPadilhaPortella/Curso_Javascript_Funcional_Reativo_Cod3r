const fs = require('fs');
const { resolve } = require('path');
const path = require('path');


function exibirConteudo(path) {
    return new Promise((resolve) => {
        fs.readFile(path, function(_, conteudo) {
            resolve(conteudo.toString());
        });
    }) 
}

const filepath = path.join(__dirname, 'dados.txt');
exibirConteudo(filepath).then(console.log)
