function tratarErroELancar(erro){
    //throw new Error('Erro na pagina')
   //throw 10
   //throw true
   //throw ' mensagem' 
  throw{
      nome : erro.name,
      msg: erro.message
      data: new Date

  }
}
function imprimirNomeGritado(obj){
try {
    console.log(obj.nametoUpperCase() + '!!!')
}catch (e) {
    tratarErroELancar(e)
}finally{
    console.log('final')
}

}
    const obj = { name: 'Roberto'}
    imprimirNomeGritado(obj)