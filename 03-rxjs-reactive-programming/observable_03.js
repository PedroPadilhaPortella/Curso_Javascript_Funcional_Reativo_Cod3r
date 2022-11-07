/**
 *  Desafio Observable
 * Criar um stream de números entre um valor minimo e máximo
 */

const { Observable } = require("rxjs");

function entre(min, max) {
    if (min > max) [min, max] = [max, min];
    return new Observable((subscriber) => {
        for (let i = min; i <= max; i++) {
            subscriber.next(i);
        }
        subscriber.complete();
    });
}

entre(4, 10).subscribe(
    (x) => console.log(`x = ${x}`),
    () => {},
    () => console.log("Fim!")
);
