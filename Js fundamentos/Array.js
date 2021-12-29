const valores =[7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); /* undefined pois não existe indice 4
(Em java teria dado erro) */

valores[4]= 10;
console.log(valores);
console.log(valores.length); // lenght vai falar quantos alementos cotem na array

valores.push({id:3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); //selecionar ultimo indice 
delete valores[0]; // deletar o indice 
console.log(valores);

console.log(typeof valores); // typeof descobrir o tipo de variavel
