const { of, Observable } = require("rxjs");

function terminadoCom(texto) {
    return function (source) {
        return Observable.create((subscriber) => {
            source.subscribe({
                next(valor) {
                    if (Array.isArray(valor)) {
                        subscriber.next(
                            valor.filter((el) => el.endsWith(texto))
                        );
                    } else if (valor.endsWith(texto)) {
                        subscriber.next(valor);
                    }
                },
                error(e) {
                    subscriber.error(e);
                },
                complete() {
                    subscriber.complete();
                },
            });
        });
    };
}

of([
    "Ana Silva",
    "Maria Carolina",
    "Julia Silva",
    "Marcos Silva",
    "Paola Almeida",
])
    .pipe(terminadoCom("Silva"))
    .subscribe(console.log);
