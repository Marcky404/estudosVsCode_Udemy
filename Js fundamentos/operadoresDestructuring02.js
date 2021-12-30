// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        lagradouro: 'Rua ABC',
        numero: 1000
    }
};

const { nome, idade} = pessoa; // Extraindo o atributo nome e idade da extrutura objeto
console.log(nome, idade);
const { nome: n, idade: i} = pessoa // Extraindo nome e idade e atribuindo novos nomes para essas variaveis

console.log(n , i);

const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

const { endereço: {lagradouro, numero, cep}} = pessoa
console.log(lagradouro, numero, cep);