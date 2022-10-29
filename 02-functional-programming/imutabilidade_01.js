function ordenar(array) {
    return [...array].sort((a, b) => a - b)
} 

const numeros = Object.freeze([1, 4, 5, 2, 3, 7, 6, 10, 9, 8])

console.log(ordenar(numeros))