/**
 * Como manter a imutabilidade em objetos
 */

const pessoa1 = {
    nome: 'Pedro',
    altura: 1.75,
    cidade: 'São Paulo',
    endereco: {
        rua: 'Rua Braga',
        numero: 12
    }
}

// atribuição por referencia
const pessoa2 = pessoa1
pessoa2.cidade = 'Amsterdam'

// atribuição por referencia, com shalow clone (clone raso, não vai clonar objetos profundos)
const pessoa3 = { ... pessoa1, nome: 'Robert' } 
pessoa3.cidade = 'Lisboa'
pessoa3.endereco.numero = 15

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)