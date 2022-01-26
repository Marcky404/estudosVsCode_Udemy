let a = 3;

global.b = 123;
this.c = 456;
this.d = false
this.e = 'Teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c ) // A variavel c foi exportada para fora do arquivo
console.log(module.exports === this) // aqui ela não e esportada pois não foi selecionada