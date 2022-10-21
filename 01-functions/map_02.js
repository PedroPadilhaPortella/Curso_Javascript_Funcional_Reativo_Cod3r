/**
 * Utilizando map em arrays
 */
const carrinho = [
  { nome: "Lapis", quantidade: 2, preco: 2.99 },
  { nome: "Caneta", quantidade: 5, preco: 1 },
  { nome: "Mochila", quantidade: 1, preco: 120 },
  { nome: "Caderno 10 materias", quantidade: 2, preco: 18.5 },
  { nome: "Tesoura", quantidade: 2, preco: 4.65 },
  { nome: "Estojo", quantidade: 1, preco: 7.1 },
];

const getNames = (item) => item.nome;
const getSubtotal = (item) => item.quantidade * item.preco;
const getTotal = (item, total) => (total += item);

console.log("Produtos:", carrinho.map(getNames));
console.log("Subtotal:", carrinho.map(getSubtotal));
console.log("Total:", carrinho.map(getSubtotal).reduce(getTotal));
