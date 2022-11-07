/**
 * Tipos de Operadores RXJS
 */

// Operadores de Criação
const { of } = require("rxjs");
// Operadores Encadeáveis (Pipeable Op.)
const { last, first, map } = require("rxjs/operators");

of(1, 2, "pedro", false, ["a", "b", "c"])
    .pipe(
        // first(),
        last(),
        map((v) => v[0]),
        map((v) => `O valor gerado foi ${v}`)
    )
    .subscribe((valor) => {
        console.log(valor);
    });
