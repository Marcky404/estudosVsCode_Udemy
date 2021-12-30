function compras(trabalho1 , trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // OU
    const comprarTv50 = trabalho1 && trabalho2 // I
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise Xor
    const comprarTv32= trabalho1 != trabalho2
    const materSaudavel = !comprarSorvete // Operador unario
    return{ comprarSorvete, comprarTv32, comprarTv50, materSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
