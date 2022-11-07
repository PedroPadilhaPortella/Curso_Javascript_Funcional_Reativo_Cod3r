const { Subject, Observable } = require("rxjs");

// Versão com Observable
function getObservable() {
    return new Observable((subscriber) => {
        setTimeout(() => {
            subscriber.next(Math.random());
            subscriber.complete();
        }, 1000);
    });
}

obs1 = getObservable();

obs1.subscribe(console.log);
obs1.subscribe(console.log);

// Versão com Subject
function getSubject() {
    const sub = new Subject();
    setTimeout(() => {
        sub.next(Math.random());
        sub.complete();
    }, 1000);
    return sub;
}

sub1 = getSubject();

sub1.subscribe(console.log);
sub1.subscribe(console.log);
