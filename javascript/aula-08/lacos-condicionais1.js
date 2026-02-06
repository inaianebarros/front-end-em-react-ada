const prompt = require("readline-sync");

//Exempl0 1: solicitar saldo positivo
// let saldo = Number(prompt.question("Qual é o saldo da sua conta? "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo negativo! Por favor, informe novamente: ")
//   );
// }
// console.log("Seu saldo é:", saldo);

//Exemplo 2: somar notas enquanto forem positivas
// let notaDoAluno = Number(prompt.question("Qual é a nota do aluno? "));

// let somaDasNotas = 0;
// let qtdNotas = 0;

// while (notaDoAluno >= 0) {
//   somaDasNotas += notaDoAluno;
//   qtdNotas++;
//   notaDoAluno = Number(prompt.question("Qual é a nota do aluno? "));
// }

// console.log("A soma das notas é:", somaDasNotas);

//Math.random() gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
const numeroAleatorio = parseInt(Math.random() * 10);

let qtdTentativas = 0;

let numeroDoUsuario = Number(
  prompt.question("Adivinhe o número entre 0 e 10: ")
);

while (numeroDoUsuario !== numeroAleatorio) {
  console.log("Número errado! Tente novamente.");
  qtdTentativas++;
  numeroDoUsuario = Number(prompt.question("Adivinhe o número entre 0 e 10: "));
}

console.log(
  `Parabéns! Você acertou o número ${numeroAleatorio} em ${qtdTentativas} tentativas.`
);
