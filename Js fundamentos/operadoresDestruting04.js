function rand([min = 0 , max = 1000]){
    if (min > max) [ min, max ] = [ max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50 , 40])) // navega entre 50 a 40
console.log(rand([992])) // navega entre 992 e 1000
console.log(rand([, 10])) // navega entre 10 e 0
console.log(rand([])) // navega entre 0 e 1000
//console.log(rand()) , erro voce não pode tirar valor de underfinity
