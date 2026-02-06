const nomeUsuario = prompt("Qual é o seu nome?");
console.log(nomeUsuario?.toUpperCase());

//tipagem de arrays
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const nome: string[] = ["Hugo", "Inaiane"];
console.log(nome);

const misto: (string | number | boolean)[] = [1, "Hugo", true];
console.log(misto);

const frutas: Array<string> = ["Maçã", "Bana na", "Laranja"];
console.log(frutas);

//tupla
const pessoaTupla: [string, number] = ["Hugo", 25];
console.log(pessoaTupla);

//Objetos
const pessoa: Person = {
  nome: "Hugo",
  idade: 25,
  profissao: "Desenvolvedor",
  altura: 1.75
};

// interface
interface Person {
  nome: string;
  idade?: number;
  profissao: string;
  altura: number;
}

function chooseNumber(num1:number, num2:number, criterion?:'greater' | 'lower'){
   switch(criterion){
    case 'greater':
        return num1 > num2 ? num1 : num2;
    case 'lower':
        return num1 < num2 ? num1 : num2;
    default:
        const numeroAleatorio = Math.random();
    if(numeroAleatorio < 0.5){
        return num1;
    }
    return num2;
}
}


const numeroEscolhido = chooseNumber(10, 20, 'greater');
console.log(numeroEscolhido);

// utility tipes: a ideia deles é permitir a criação de tipos a partir de outros tipos, com algumas modificações

//Partial
type PersonParcial = Partial<Person> // todos os campos são opcionais

const pessoaParcial: PersonParcial = {
    nome: "Hugo",
    profissao: "Desenvolvedor",
    altura: 1.75
}

//Required
type PersonRequired = Required<Person> // todos os campos são obrigatórios

const pessoaRequired: PersonRequired = {
    nome: "Hugo",
    idade: 25,
    profissao: "Desenvolvedor",
    altura: 1.75
}

//Pick
type PersonPick = Pick<Person, 'nome' | 'idade'> // apenas os campos nome e idade são permitidos

const pessoaPick: PersonPick = {
    nome: "Hugo",
    idade: 25,
}

//Omit
type PersonOmit = Omit<Person, 'idade'> // todos os campos são opcionais, exceto idade

const pessoaOmit: PersonOmit = {
    nome: "Hugo",
    profissao: "Desenvolvedor",
    altura: 1.75
}

//Exclude
type PersonExclude = Exclude<Person, 'idade'> // todos os campos são opcionais, exceto idade

const pessoaExclude: PersonExclude = {
    nome: "Hugo",
    profissao: "Desenvolvedor",
    altura: 1.75
}

//Record
type PersonRecord = Record<string, Person> // um objeto com chaves do tipo string e valores do tipo Person

const pessoas : PersonRecord = {
    "1": {
        nome: "Hugo",
        idade: 25,
        profissao: "Desenvolvedor",
        altura: 1.75
    },
    "2": {
        nome: "Inaiane",
        idade: 25,
        profissao: "Desenvolvedora",
        altura: 1.65
    }
}
