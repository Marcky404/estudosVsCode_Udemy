let a = 3 
global.b = 123
this.c = 456
this.d = false
this.e= 'teste'
console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c)
console.log(module.exports === this);
console.log(module.exports)

// criado uma variavel louca sem var se sem let 
abc = 3; // criar variaveis sem var e let acarreta em criar uma variavel global(não faça isso);
console.log(global.abc)
