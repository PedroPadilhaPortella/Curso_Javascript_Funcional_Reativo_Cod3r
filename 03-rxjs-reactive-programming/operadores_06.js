const { from, Observable } = require("rxjs");

function createPipableOperators(operatorFn) {
    return function (source) {
        return Observable.create((subscriber) => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e)),
            });
        });
    };
}

function primeiro() {
    return createPipableOperators((subscriber) => ({
        next(valor) {
            subscriber.next(valor);
            subscriber.complete();
        },
    }));
}

function ultimo() {
    let ultimo;
    return createPipableOperators((subscriber) => ({
        next(v) {
            ultimo = v;
        },
        complete() {
            if (ultimo !== undefined) {
                subscriber.next(ultimo);
            }
            subscriber.complete();
        },
    }));
}

function nenhum() {
    return createPipableOperators((subscriber) => ({
        next(valor) {
            subscriber.complete();
        },
    }));
}

from([1, 2, 3, 4, 5])
    .pipe(
        primeiro()
        // ultimo()
        // nenhum()
    )
    .subscribe(console.log);
