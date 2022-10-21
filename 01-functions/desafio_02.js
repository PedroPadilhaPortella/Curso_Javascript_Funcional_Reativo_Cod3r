const carrinho = [
  { nome: "Lapis", quantidade: 2, preco: 2.99, fragil: false },
  { nome: "Caneta", quantidade: 5, preco: 1, fragil: true },
  { nome: "Mochila", quantidade: 1, preco: 120, fragil: false },
  { nome: "Caderno 10 materias", quantidade: 2, preco: 18.5, fragil: true },
  { nome: "Tesoura", quantidade: 2, preco: 4.65, fragil: true },
  { nome: "Estojo", quantidade: 1, preco: 7.1, fragil: false },
];

// Retornar os elementos frágeis
// Retornar o subtotal
// Retornar a média dos valores
console.log(
  carrinho
    .filter((produto) => produto.fragil)
    .map((produto) => produto.preco * produto.quantidade)
    .reduce((acc, el, i, array) => {
        const novaQuantidade = acc.qtde + 1;
        const novoTotal = acc.total + el;
        return {
          qtde: novaQuantidade,
          total: novoTotal,
          media: novoTotal / novaQuantidade,
        };
      },
      { qtde: 0, total: 0, media: 0 }
    )
);
