// map: transformar um array em outro array, aplicando uma função a cada elemento do array
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((numero) => {
  return numero * 2;
});
console.log(numerosDobrados);
console.clear();

const carrinho1 = [
  { nome: "Produto 1", preco: 100 },
  { nome: "Produto 2", preco: 200 },
  { nome: "Produto 3", preco: 300 },
];

const precoTotal = carrinho1.map((produto) => {
  return produto.preco;
});
console.log(precoTotal);
console.clear();

// desestruturação ou spread operator
const pessoa = {
  nome: "Hugo",
  idade: 25,
  altura: 1.75,
};
const pessoaComPeso = {
  ...pessoa,
  peso: 79,
};

console.log(pessoaComPeso);
console.clear();

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...itemDoCarrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);
