const { interval, } = require('rxjs');

const gerarNumeros = interval(1000)

const sub1 = gerarNumeros.subscribe((numero) => console.log(Math.pow(2, numero)));

setTimeout(() => {
    sub1.unsubscribe();
}, 5000);