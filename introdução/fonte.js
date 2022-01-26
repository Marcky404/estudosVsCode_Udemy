console.log("Legal!!!");
console.log("Boa tarde");
console.log("Como vai?");

let pessoa ={nome: 'ana', falar : function () {
    return `Eu sou ${this.nome}`}
}
console.log(pessoa.falar())