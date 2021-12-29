const funcs = []

for ( var i = 0; i <10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// resultados 10!, pois a variavel var não tem escopo de função ou seja não tem escopo de bloco!

