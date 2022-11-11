const fs = require("fs");
const path = require("path");
const { Observable } = require("rxjs");

function createPipableOperators(operatorFn) {
    return function (source) {
        return Observable.create((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || ((e) => subscriber.error(e)),
                complete: sub.complete || ((e) => subscriber.complete(e)),
            });
        });
    };
}

function lerDiretorio(caminho) {
    return new Observable((subscriber) => {
        try {
            fs.readdirSync(caminho).forEach((file) => {
                subscriber.next(path.join(__dirname, "legendas", file));
            });
            subscriber.complete();
        } catch (error) {
            subscriber.error(error);
        }
    });
}

function lerArquivo() {
    return createPipableOperators((subscriber) => ({
        next(caminho) {
            try {
                const conteudo = fs.readFileSync(caminho, {
                    encoding: "utf-8",
                });
                subscriber.next(conteudo.toString());
            } catch (error) {
                subscriber.error(error);
            }
        },
    }));
}

function mesclarPor(pattern) {
    return function (array) {
        return array.join(pattern);
    };
}

function separarPor(pattern) {
    return createPipableOperators((subscriber) => ({
        next(texto) {
            texto.split(pattern).forEach((el) => {
                subscriber.next(el);
            });
        },
    }));
}

function getElementosTerminadosEm(pattern) {
    return createPipableOperators((subscriber) => ({
        next(texto) {
            if (texto.endsWith(pattern)) {
                subscriber.next(texto);
            }
        },
    }));
}

function removerLinhasVazias() {
    return createPipableOperators((subscriber) => ({
        next(texto) {
            if (texto.trim()) {
                subscriber.next(texto);
            }
        },
    }));
}

function removerPadrao(pattern) {
    return function (array) {
        return array.filter((el) => !el.includes(pattern));
    };
}

function removerNumeros() {
    return createPipableOperators((subscriber) => ({
        next(texto) {
            const num = parseInt(texto.trim());
            if (num !== num) {
                subscriber.next(texto);
            }
        },
    }));
}

function removerSimbolos(simbolos) {
    return createPipableOperators((subscriber) => ({
        next(texto) {
            const textoSemSimbolos = simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join("");
            }, texto);

            subscriber.next(textoSemSimbolos);
        },
    }));
}

function agruparPalavras() {
    return createPipableOperators((subscriber) => ({
        next(palavras) {
            const agrupadas = Object.values(
                palavras.reduce((acc, palavra) => {
                    const p = palavra.toLowerCase();
                    const quantidade = acc[p] ? acc[p].quantidade + 1 : 1;
                    acc[p] = { palavra: p, quantidade };
                    return acc;
                }, {})
            );

            subscriber.next(agrupadas);
        },
    }));
}

function ordenarPor(attr, ordem = "asc") {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return [...array].sort(ordem === "asc" ? asc : desc);
    };
}

module.exports = {
    lerDiretorio,
    getElementosTerminadosEm,
    lerArquivo,
    mesclarPor,
    separarPor,
    removerLinhasVazias,
    removerPadrao,
    removerNumeros,
    removerSimbolos,
    agruparPalavras,
    ordenarPor,
};
