const prompt = require("readline-sync");

let numeroMaior = 0;
let numeroInformado;

for (let i = 1; i >= 5; i++) {
  numeroInformado = Number(prompt.question("Informe um número positivo: "));

  if (numeroInformado > numeroMaior) {
    numeroMaior = numeroInformado;
  }
}