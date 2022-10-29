/**
 * Clojure é quando uma função "lembra" seu escopo léxico,
 * mesmo quando a função é executada fora do escopo léxico.
 */

const x = 3;

function somarXMais3() {
    return x + 3;
}

module.exports = somarXMais3;