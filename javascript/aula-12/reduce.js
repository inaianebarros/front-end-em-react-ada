const produtos = [
  { nome: "Feijão", preco: 7.98, quantidade: 3 },
  { nome: "Arroz", preco: 4.98, quantidade: 5 },
  { nome: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const precoTotal = produtos.reduce((acumulador, produto) => {
  return produto.preco * produto.quantidade + acumulador;
}, 0);

console.log(precoTotal);
