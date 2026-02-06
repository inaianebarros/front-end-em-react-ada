interface IPessora{
    nome: string;
    idade: number;
    altura: number;

    dormir(): void;
}


// classes
class Pessoa implements IPessora{
    //atributos: caracteristicas da classe
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;

    //metodos: ações que a classe pode realizar

    //metodo constructor: é um método especial que é executado automaticamente quando um objeto é criado a partir da classe
    constructor(nome: string, idade: number, altura: number, cpf: string){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }

    dormir(){
        console.log('Dormindo...');
}
    //acessor: getter
    get cpf(): string{
        return this._cpf;
    }
    //acessor: setters
    set cpf(newCpf: string){
        this._cpf = newCpf;
    }
}

class Professor extends Pessoa{
    codigo: string;
    constructor(nome: string, idade: number, altura: number, cpf: string ,codigo: string){
        super(nome, idade, altura,cpf );
        this.codigo = codigo;
    }

    ensinar(){
        console.log('ensinando...');
    }
}

//criando uma pessoa (individuo/objeto) a partir da classe Pessoa
const pessoa1 = new Pessoa("Hugo", 25, 1.75, "123.456.789-00");

//criando um professor (individuo/objeto) a partir da classe Professor
const professor1 = new Professor("João", 40, 1.80, "987.654.321-00", "123456");
professor1.ensinar();