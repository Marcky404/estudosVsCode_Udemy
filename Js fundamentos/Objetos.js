const prod1={} // Objeto vazio
prod1.nome = 'Celular Ultra Mega';
prod1.valor= 14.5;
console.log(prod1);

prod1['desconto legal']= 0.40; // evite usar nome com espaço

console.log(prod1);

// anitação literal de objetos:

const prod2={
    nome: 'Camisa polo',
    precox: 79.90,
    
} ;// OBS inves de index= 'ian' usar index: 'ian'
console.log(prod2);

//Crie um Objeto Com 4 informações e as imprima

const prod3={
    nome: 'Celular',
    preço: 3.450,
    marca: 'Motorola',
    Modelo: 'AX4.4.1Px'

};
console.log(prod3);