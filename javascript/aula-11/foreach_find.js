// funcoes de alta ordem de arrays

//1. forEach()
const numeros = [40, 50, 60, 10, 70, 80];

function imprimirNumero(elemento) {
  console.log(elemento);
}

//numeros.forEach(imprimirNumero);

numeros.forEach((elemento) => console.log(elemento));
numeros.forEach((elemento, index) => console.log(elemento, index));
numeros.forEach((elemento, index, array) =>
  console.log(elemento, index, array)
);

console.clear();

// 2. find(): util para encontrar um elemento no array

const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(encontrado);

console.clear();

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.nome === "Leticia");
console.log(pessoaEncontrada);
