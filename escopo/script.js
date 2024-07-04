// escopo serve para evitar conflito entre nomes de variaveis
//  nunca criar variavel sem escopo

'use strict'
var carro = "fusca";
function mostrarCaro() {

    console.log(carro);
}
mostrarCaro();
console.log(carro);

// escopo de bloco
// variaveis com var vazam
//  const e let, respeitam o escopo bloco

if (true) {
    let mes = 'Dezembro'
    console.log(mes);
}
// usando const ou let nao vaza mais
// console.log(mes);

if (false) {
    var mes = 'Dezembro'
    console.log(mes);
}
console.log(mes);


// {} cria um bloco

{
    var carro2 = 'Fusca';
    const ano = 2018;
}
console.log(carro2)
// console.log(ano)
var i = 50
for (let i = 0; i < 10; i++) {
    console.log(`numero ${i}`);
}
console.log(i * 10)



const semana = 'sexta';
// semana = 'quinta';
console.log(semana)

const data = {
    ano: 2024,
    mes: 'dezembro',
}
data.ano = 2023;


let ano;
ano = 2024;
ano++;
console.log(ano)

// let ano = 2023;