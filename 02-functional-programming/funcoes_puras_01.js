/**
 * As funções puras são caracterizadas por não produzir nenhum efeito colateral, ou seja, ela não
 * muda qualquer estado na aplicação. Além disso, a função precisa ser completamente determinística,
 * uma vez que cada saída será produzida para uma entrada específica.
 */

const PI = 3.14;

// Funcao impura, pois o não possui efeitos colaterais observáveis, mas o valor de retorno 
// não é determinado apenas pelo valor de entrada, nesse caso, como ele usa o valor de PI.
function areaCircunferencia(raio) {
    return raio * raio * PI
}

// Agora é uma funcão pura
function areaCircunferenciaPura(raio, pi) {
    return raio * raio * pi
}


console.log(areaCircunferencia(10))
console.log(areaCircunferenciaPura(10, PI))