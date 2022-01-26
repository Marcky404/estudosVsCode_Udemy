const imprimirResultado = function(nota){
        switch (Math.floor(nota)){
            case 10:
            case 9:
                console.log('Quadro de Honra')
                break // Fimse? se o break não for colocado ele ira eecultar todos os demais comandos da extrutura abaixo!
            case 8 : case 7:
                console.log('Aluno Aprovado')
                break
                case 6: case 5 : case 4:
                    console.log('Recuperação')
                break
                case 3: case 2: case 1: case 0:
                    console.log('Reprovado')
                    break
                    default: // caso não use o comando default precisa finalizar o console.log abaixo com break
                        console.log('Nota Invalida')        
                }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(2)
imprimirResultado(11)
imprimirResultado(-1) 