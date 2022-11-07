const { Observable } = require('rxjs');

// Promise
const promise1 = new Promise((resolve) => {
    resolve('Promise é bem legal')
});

// Observable
const observable1 = new Observable((subscriber) => {
    subscriber.next('Observer é bem legal')
});

promise1.then(console.log)
observable1.subscribe(console.log)