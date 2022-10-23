const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(caminho);
      const fullFiles = files.map((file) =>path.join(__dirname, "legendas", file));
      resolve(fullFiles);
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function mesclarPor(pattern) {
  return function (array) {
    return array.join(pattern);
  };
}

function separarPor(pattern) {
  return function (conteudo) {
    return conteudo.split(pattern);
  };
}

function getElementosTerminadosEm(pattern) {
  return function (array) {
    return array.filter((el) => el.endsWith(pattern));
  };
}

function removerLinhasVazias(array) {
  return array.filter((el) => el.trim());
}

function removerPadrao(pattern) {
  return function (array) {
    return array.filter((el) => !el.includes(pattern));
  };
}

function removerNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, el);
    });
  };
}

function agruparPalavras(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const p = palavra.toLowerCase();
      const quantidade = acc[p] ? acc[p].quantidade + 1 : 1;
      acc[p] = { palavra: p, quantidade };
      return acc;
    }, {})
  );
}

function ordenarPor(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

module.exports = {
  lerDiretorio,
  getElementosTerminadosEm,
  lerArquivos,
  mesclarPor,
  separarPor,
  removerLinhasVazias,
  removerPadrao,
  removerNumeros,
  removerSimbolos,
  agruparPalavras,
  ordenarPor,
};
