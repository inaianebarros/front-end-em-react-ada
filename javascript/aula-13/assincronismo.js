const fs = require("fs");

// * Callbacks: função que é passada como argumento para outra função e será executada depois de algum processamento assíncrono.
console.log("ANTES da função de ler  o arquivo...");

//funcao assincrona (ler um arquivo leva um tempo...)
fs.readFile("javascript/aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
  if (erro) {
    console.log("Erro ao ler o arquivo:", erro);
  } else {
    console.log("Conteúdo do arquivo:", conteudoDoArquivo.toString());
  }
});

console.log("DEPOIS da função de ler  o arquivo...");

//* SetTimeout: função que executa uma função após um determinado tempo (em milissegundos).
console.log("ANTES do setTimeout...");

setTimeout(() => {
  console.log("Depois de 3 segundos...");
}, 3000);

console.log("DEPOIS do setTimeout...");

//* Promises: objeto que representa a conclusão (ou falha) de uma operação assíncrona.
console.log("ANTES da Promise...");

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("javascript/aula-13/arquivo.txt", (erro, conteudoDoArquivo) => {
      if (erro) {
        reject("Erro ao ler o arquivo:", erro);
      } else {
        resolve("Conteúdo do arquivo:", conteudoDoArquivo.toString());
      }
    });
  });
}

lerArquivoPromise()
  .then((resultado) => {
    //then é executado quando a promise é resolvida
    console.log(resultado);
  })
  .catch((erro) => {
    //catch é executado quando a promise é rejeitada
    console.log(erro);
  })
  .finally(() => {
    //finally é executado independentemente de a promise ser resolvida ou rejeitada
    console.log("FIM da Promise...");
  });

console.log("DEPOIS da Promise...");

//* Async/Await: forma mais recente de lidar com operações assíncronas, usando a palavra-chave async para declarar uma função assíncrona e a palavra-chave await para aguardar a conclusão de uma promise.
console.log("ANTES do async/await...");

async function lerArquivoAsyncAwait() {
  try {
    const resultado = await lerArquivoPromise();
    console.log(resultado);
  } catch (erro) {
    console.log(erro);
  } finally {
    console.log("FIM do async/await...");
  }
}

lerArquivoAsyncAwait();
