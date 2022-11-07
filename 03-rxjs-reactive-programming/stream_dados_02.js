function gerarElementos(array) {
    return {
        iniciar(fn) {
            let i = 0;
            const interval = setInterval(() => {
                if (i >= array.length) {
                    return clearInterval(interval);
                } else {
                    fn(array[i]);
                    i++;
                }
            }, 1000);

            return {
                parar() {
                    clearInterval(interval);
                },
            };
        },
    };
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const temp1 = gerarElementos(numeros);
const exec1 = temp1.iniciar((numero) => console.log(Math.pow(2, numero)));

setTimeout(() => {
    exec1.parar();
}, 4000);


gerarElementos(['pedro', 'daniel', 'samuel']).iniciar(console.log)