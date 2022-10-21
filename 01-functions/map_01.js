const numbers = [1, 2, 3, 4]
const names = ['Pedro', 'Samuel', 'Daniel']

const double = (n) => n * 2;
const firstLetter = (name) => name[0]

const dobrados = numbers.map(double);
const letras = names.map(firstLetter);

console.log(dobrados);
console.log(letras);