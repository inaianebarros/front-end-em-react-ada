// HIGH ORDER FUNCTION - FUNÇÃO DE ORDEM SUPERIOR

//1- Funcao que retorna outra função como parâmetro

function welcome(courseName) {
  return (studentName) => {
    console.log(`Seja bem vindo(a) ${studentName}, ao curso de ${courseName}`);
  };
}

const displayWelcomeToStudent = welcome("Front-end em React");
displayWelcomeToStudent("Nay");

console.clear();

//2- Função que recebe ortra função como parâmetro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

function calcular(num1, num2, operacao) {
  return operacao(num1, num2);
}

console.log(calcular(10, 5, subtrair));

// calcular: (num1 * num2) + ( 2 * num1 * num2)
console.log(calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2));

console.log(calcular(10, 5, (num1, num2) => num1 + num2));
