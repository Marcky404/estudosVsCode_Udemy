const nome = 'Rebeca';
const concatenaçao = "Olá " + nome + "!"
const template = `
Olá
${nome}!`

console.log(concatenaçao, template);

const template2 = `Ola ${nome} você está testando o Js template string`;
console.log(template2); /* em template string você 
usa o ${} para referenciar a variavel em questão
 */
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`)
