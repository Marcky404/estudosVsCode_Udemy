Number.prototype.entre = function( inicio, fim) {
    return this >= inicio && this <= fim
} // Funcion criada para ser usada abaixo na funcção de notas

const imprimirResultado = function(nota){
    if(nota.entre(9,10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    } else if (nota.entre(4,6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0,3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota ou Valor Invalido :(')
    }
}
console.log('Fim!')

imprimirResultado(10)
imprimirResultado(7.55)
imprimirResultado(6)
imprimirResultado(2.33)
imprimirResultado(11)
imprimirResultado(-1) 