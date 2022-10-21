class Produto {
  constructor(nome, preco, desconto = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this._desconto = desconto;
  }

  get precoFinal() {
    return this.preco * (1 - this._desconto);
  }
}

Produto.prototype.log = function( ) {
    console.log(`${this.nome} => R$ ${this.preco}, Desconto R$${this._desconto}`);
}

Object.defineProperty(Produto.prototype, 'desconto', {
    get: function() {
        return this._desconto * 100 + "% de desconto"
    },
    set: function(desc) {
        this._desconto = desc
    }
})

const p1 = new Produto("Caneta", 1.99);
const p2 = new Produto("Geladeira", 4500);

console.log(p2.preco);
console.log(p2.precoFinal);
console.log(p2.desconto);
p2.log()