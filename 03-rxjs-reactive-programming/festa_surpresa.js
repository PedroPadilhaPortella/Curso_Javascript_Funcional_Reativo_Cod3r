const readline = require("readline");

/**
 * Observer
 * Aniversário Surpresa
 */

function obterResposta(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(pergunta, (resp) => {
            resolve(resp);
            rl.close();
        });
    });
}

function namorada() {
    setTimeout(() => {
        console.log("Namorada: Apagar as luzes");
        console.log("Namorada: Pedir silencio");
        console.log("Namorada: Surpresa!!");
    }, 2000);
}

function sindico() {
    setTimeout(() => {
        console.log("Síndico: Monitorando o barulho");
    }, 1000);
}

async function porteiro(interessados) {
    while (true) {
        const resposta = await obterResposta("O namorado já chegou? (S/N/Q)\n");
        if (resposta.toLowerCase() === "s") {
            (interessados || []).forEach((obs) => {
                obs();
            });
            break;
        } else if (resposta.toLowerCase() === "q") {
            break;
        }
    }
}

porteiro([namorada, sindico]);
