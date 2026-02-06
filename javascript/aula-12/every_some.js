//every: verifica se todos os elementos de um array seguem uma determinada condicao retornada por uma função

const numeros = [40, 30, 50, 70, 80];
const pessoas = [
  { nome: "Pessoa 1", idade: 30, altura: 1.75 },
  { nome: "Pessoa 2", idade: 25, altura: 1.56 },
  { nome: "Pessoa 3", idade: 21, altura: 1.6 },
  { nome: "Pessoa 4", idade: 27, altura: 1.9 },
];

console.log(numeros.every((elemento) => elemento > 0));
console.clear();
console.log(
  pessoas.every((pessoas) => pessoas.idade >= 18 && pessoas.altura >= 1.5)
);

console.clear();

//some: verificar se algum elemento do array retorna true para uma determinada condição
console.log(pessoas.some((pessoas) => pessoas.idade === 18));
