

const imprimirResultado = function (nota) {
    if (nota >=7){
        console.log("Aprovado com nota: " + nota)
    } else {
        console.log('Reprovado com Nota: ' + nota)
    }
}

imprimirResultado(8)
imprimirResultado(6)
imprimirResultado('Epa!') // O java execulta por ser uma linguagem racamente tipada

//11-99167-4221