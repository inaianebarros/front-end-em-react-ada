const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual é a sua idade? "));

if (idade >= 18) {
  console.log("Usuário é maior de idade.");
} else {
  console.log("Usuário é menor de idade.");
}

const notaFinal = 60;

if (notaFinal >= 70) {
  console.log("Aprovado");
} else if (notaFinal >= 50) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

const idade2 = 18;
const temCNH = false;

if (idade2 >= 18 && temCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
