{
    {
        {
            {
                var sera = 'sera???';
                console.log(sera);
            }
        }
    }
}
console.log(sera); // o valor sera sobrescrito por ser nivel Global(visivel na aplicação inteira)

function teste () {
    var local = 123
    console.log(local)
}
teste()
//console.log(local) , não pode ser execultado fora de uma função!