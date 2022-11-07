// esperar 3 segundos, depois gerar numeros de 500 em 500 milissegundos,
// e executar o unsubscribe em 10 segundos

const { timer, Subscription } = require('rxjs')

const obs = timer(3000, 500);

const sub1 = obs.subscribe((numero) => console.log(`#1 Gerou o numero ${numero}`))
const sub2 = obs.subscribe((numero) => console.log(`#2 Gerou o numero ${numero}`))

const sub = new Subscription();

sub.add(sub1)
sub.add(sub2)

setTimeout(() => {
    sub.unsubscribe();
    // sub1.unsubscribe();
    // sub2.unsubscribe();
}, 10000);