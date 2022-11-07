function gerarNumeros(fn) {
    return {
        iniciar(fn, interval = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, interval);

            return {
                parar() {
                    clearInterval(i)
                }
            }
        }
    }
}

const temp1 = gerarNumeros();

const exec1 = temp1.iniciar(x => console.log(x * 2), 100)

setTimeout(() => {
    exec1.parar();
}, 10000);