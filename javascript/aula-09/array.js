const array = [1, 2, 3, 4, 5];

// adiciona um elemento ao final do array
array.push(6);
console.log("Após push:", array);

// adicionando um elemento no início do array
array.unshift(0);
console.log("Após unshift:", array);

//remvove o último elemento do array
console.clear();
array.pop();
console.log("Após o pop:", array);

// remove o primeiro elemento do array

array.shift();
console.log("Após o shift:", array);

//buscano elemento no array
console.clear();
//será se o elemento 3 está no array
console.log(array.includes(3)); //true
console.log(array.includes(10)); //false

if (array.includes(10)) {
  console.log("O número 3 foi encontrado no array");
} else {
  console.log("O numero nao existe dentro do array");
}

const existeNumero = array.includes(3);

console.clear();

//desconbrindo a posição do elemento no array
//-1 significa que o elemento não foi encontrado
// devolve a  posicao do elemento quando encontrado

console.log(array.indexOf(3)); //2

console.clear();

//lastIndexOf - devolve a ultima posicao do elemento quando encontrado
array.push(3);
console.log(array);
console.log(array.lastIndexOf(3)); //5

console.clear();

//percorendo os elementos do array
for (let i = 0; i < array.length; i++) {
  console.log(`Elemento na posiçao ${i}: ${array[i]}`);
}

// for of percorre os elementos do array diretamente

for (let elemento of array) {
  console.log(`Elemento: ${elemento}`);
}

// for in percorre as posicoes do array
for (let indice in array) {
  console.log(`Indice: ${indice}, Elemento: ${array[indice]}`);
}
