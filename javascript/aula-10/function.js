// funcao sem parametros
function saudacao() {
  console.log("Olá, seja bem-vindo ao curso de Front end em React!");
}

saudacao(); // Chamada da função saudacao
console.clear();

// funcao com parametros
function saudacaoComNome(nome) {
  console.log(`Olá, ${nome}, seja bem-vindo ao curso de Front end em React!`); // template string || template literal
}

saudacaoComNome("Maria"); // Chamada da função com argumento
console.clear();

// funcao com dois parametros
function saudadaComNomeCurso(nome, curso) {
  console.log(`Olá, ${nome}, seja bem-vindo ao curso de ${curso}!`);
}

saudadaComNomeCurso("João", "JavaScript"); // Chamada da função com dois argumentos

console.clear();

// funcao com retorno de valor

function saudacaoComRetorno(nome, curso) {
  return `Olá, ${nome}, seja bem-vindo ao curso de ${curso}!`;
}
const saudacaoMensagem = saudacaoComRetorno("Ana", "Python"); // Chamada da função com dois argumentos
console.log(saudacaoMensagem);

console.clear();

// funcao com paramentro padrao

function saudacaoComPadrao(nome = "Visitante", curso = "Programação") {
  return `Olá, ${nome}, seja bem-vindo ao curso de ${curso}!`;
}

console.log(saudacaoComPadrao());

console.clear();

// funçoes anonimas
const saudacaoAnonima = function (nome) {
  return `Olá, ${nome}, seja bem-vindo ao curso!`;
};

console.log(saudacaoAnonima("Carlos"));

console.clear();

// arrow functions
const saudacaoArrow = (nome) => {
  return `Olá, ${nome}, seja bem-vindo ao curso!`;
};
console.log(saudacaoArrow("Beatriz"));

const saudacaoArrowReduzida = (nome) =>
  `Olá, ${nome}, seja bem-vindo ao curso!`;
console.log(saudacaoArrowReduzida("Pedro"));
