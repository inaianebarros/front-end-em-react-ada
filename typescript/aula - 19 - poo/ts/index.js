"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// classes
class Pessoa {
    //metodos: ações que a classe pode realizar
    //metodo constructor: é um método especial que é executado automaticamente quando um objeto é criado a partir da classe
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    dormir() {
        console.log('Dormindo...');
    }
}
//criando uma pessoa (individuo/objeto) a partir da classe Pessoa
//
const pessoa1 = new Pessoa("Hugo", 25, 1.75);
//# sourceMappingURL=index.js.map