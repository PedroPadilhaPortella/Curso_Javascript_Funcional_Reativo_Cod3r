function eager(a, b) {
    const fim = Date.now() + 2500
    while(Date.now() < fim) { }
    const valor = Math.pow(a, 3)
    return valor + b
}

function lazy(a) {
    const fim = Date.now() + 2500
    while(Date.now() < fim) { }
    const valor = Math.pow(a, 3)
    return function(b) {
        return valor + b
    }
}

console.time("#1")
console.log(eager(2, 100))
console.log(eager(2, 200))
console.log(eager(2, 300))
console.timeEnd("#1")


console.time("#2")
const lazy2 = lazy(2)
console.log(lazy2(100))
console.log(lazy2(200))
console.log(lazy2(300))
console.timeEnd("#2")