let num1 = 1;
let num2 = 2;

num1++;// O ++ acrecenta mais 1 ao valor (pos´fixada) menor prioridade

console.log(num1);

--num1 // Pré Fixada, maior prioridade
console.log(num1);

console.log(++num1 === num2--);
console.log(num1 === num2);