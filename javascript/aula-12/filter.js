const valores = [40, 34, 20, 10, 50, 4, 22, 49, 23, 8];

//pega o primeiro valor encontrado que é par
const valorPar = valores.find((valor) => valor % 2 === 0);

//retorna todos os valores pares
const todosPares = valores.filter((valor) => valor % 2 === 0);

const alunos = [
  { nome: "Hugo", media: 8.8 },
  { nome: "João", media: 7.5 },
  { nome: "Maria", media: 6.0 },
  { nome: "Pedro", media: 5.9 },
];

const alunosAprovados = alunos.filter((aluno) => aluno.media >= 6.0);

const produtos = [
  { nome: "Feijão", preco: 7.98, tipo: "Bebida" },
  { nome: "Batata Frita", preco: 4.98, tipo: "Comida" },
  { nome: "Pizza", preco: 24.99, tipo: "Comida" },
  { nome: "Refrigerante", preco: 5.99, tipo: "Bebida" },
  { nome: "Pastel", preco: 12.99, tipo: "Comida" },
  { nome: "Chocolate", preco: 3.99, tipo: "Comida" },
];

const produtosComidaBarata = produtos.filter(
  (produto) => produto.tipo === "Comida" && produto.preco <= 10.0
);

console.log(produtosComidaBarata);
