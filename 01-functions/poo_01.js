function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desconto = desconto;

  this.precoFinal = function () {
    return this.preco * (1 - this.desconto);
  };
}

const p1 = new Produto("Caneta", 1.99);
const p2 = new Produto("Geladeira", 4500);

console.log(p2.preco);
console.log(p2.precoFinal());
