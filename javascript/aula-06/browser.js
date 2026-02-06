const readlineSync = require("readline-sync");

const idade = readlineSync.question("Qual é a sua idade? ");
console.log("A usuario tem", idade, "anos de idade.");
