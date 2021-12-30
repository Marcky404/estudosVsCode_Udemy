console.log('01)' , '01' == 01); // == operador relacional compara igualdade entre 2 valores.
console.log('02)' , '01' === 01);// === não e extritamente igual
console.log('03', '3' != 3) ;// 3 é diferente de 3? false, não leva em consideração o tipo mais sim o valor
console.log('4)', '3'!== 3); // extritamente diferente

console.log('5)', 3 < 2);
console.log('6)', 3 > 2);
console.log('7)', 3 <= 2);
console.log('8)', 3 >= 2);

const d1 = new Date(0); // data 
const d2 = new Date(0);

console.log('09', d1 === d2);
console.log('10', d1 == d2);
console.log('11', d1.getTime() === d2.getTime());
console.log('12', undefined == null);
console.log('13', undefined === null);



