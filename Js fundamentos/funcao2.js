// armazenando uma funcao em uma variavel

const imprimirSoma = function (a , b){
console.log( a + b)
}
imprimirSoma (2, 3)

// Armazenando uma funcao arrow em uma variavel

const soma = ( a, b)  => {
        return a + b
}

console.log(soma( 2, 3));

// retorno implicito
const subtracao = ( a, b) => a - b
// ( a , b) são parametros 
console.log(subtracao(2 , 3));

const somar = (a, b) => a + b
 
const resultado = somar(2, 3)
console.log(resultado) /* Neste exemplo, a função anônima não tem nome entre a palavra-chave function e os parênteses ().
Como precisamos chamar a função anônima em algum momento, atribuímos essa função a uma variável, nesse caso à variável show. */

const imprimir2 = a => console.log (a)
imprimir2('legal!!!')