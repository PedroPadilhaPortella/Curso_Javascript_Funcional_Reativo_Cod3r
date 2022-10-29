/**
 * Clojure é quando uma função "lembra" seu escopo léxico,
 * mesmo quando a função é executada fora do escopo léxico.
 */
const somarXMais3 = require('./clojure_escopo');

console.log(somarXMais3())