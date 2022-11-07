const { Observable } = require("rxjs");

// Observable
const obs$ = new Observable((subscriber) => {
    subscriber.next("RXJS");
    subscriber.next("Observables são muito legais");

    if (Math.random() > 0.5) {
        subscriber.complete();
    } else {
        subscriber.error("Erro aleatório");
    }
});

// obs$.subscribe(
//     (success) => console.log(success),
//     (error) => console.log(error),
//     () => console.log("Completed")
// );

obs$.subscribe({
    next(success) {
        console.log(success);
    },
    error(error) {
        console.log(error);
    },
    complete() {
        console.log("Completed");
    },
});
