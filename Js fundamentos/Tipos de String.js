const escola = "cod3r";
console.log(escola.charAt(4)); 
console.log(escola.charAt(5)); 
console.log(escola.charCodeAt(3)); /*
 vai revelar o codigo unicode da palavra escola ou digito 3 
 */
console.log(escola.indexOf('3')); // vai identificar se tem o numero 3 na variavel String
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("escola ".concat(escola).concat("!")); // fazer concatenação
console.log(escola.replace(3,"e")); // trocou o 3 pelo e!

console.log("Ana,Maria,Pedro".split(",")); /* regex, usamos o tag split para 
gerar uma aray com 3 elementos */

