/**
 * Desenvolvendo minha própria reduce function
*/
Array.prototype.myReduce = function(fn, inicial) {
    let acc = inicial;
    for (let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
            continue
        }

        acc = fn(acc, this[i], i, this);
    }
    return acc;
}


const carrinho = [
    { nome: "Lapis", quantidade: 2, preco: 2.99 },
    { nome: "Caneta", quantidade: 5, preco: 1 },
    { nome: "Mochila", quantidade: 1, preco: 120 },
    { nome: "Caderno 10 materias", quantidade: 2, preco: 18.5 },
    { nome: "Tesoura", quantidade: 2, preco: 4.65 },
    { nome: "Estojo", quantidade: 1, preco: 7.1 },
  ];
  
  const getSubtotal = (item) => item.quantidade * item.preco;
  const getTotal = (item, total) => (total += item);
  
  console.log("Total:", carrinho.map(getSubtotal).myReduce(getTotal));
  