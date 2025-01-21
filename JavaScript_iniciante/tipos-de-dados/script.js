var nome = "Leandro"; // string
var idade = 33; // number
var time = null; // null
console.log(typeof idade);

//concatenaçao de string
var nome = "Leandro";
var sobrenome = "Mariano";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

// concatenaçao de string mais numeros
var gols = 1000;
var frase1 = "Romário fez " + gols + " gols";
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
console.log(frase2);

//exercicios
//declara uma variavel com string
var nome2 = "Leandro";
console.log(typeof nome2);
//declare uma variavel com um numero dentro de uma string
var idade = 34;
console.log(`Leandro possui ${idade} anos de idade`);
//declarar variavel com idade
var idade = 34;
console.log(`Leandro possui ${idade} anos de idade`);
//declarar variavel com soma de nomes
var primeiroNone = "Leandro";
var segundoNome = "Mariano";
var nomeCompleto2 = primeiroNone + " " + segundoNome;
console.log(nomeCompleto2);

//declara variavel com a frase it's time
var frase = "It's time"
console.log(frase)

//verificar o tipo da variavel de seu nome
var primeiroNone = "Leandro";
var segundoNome = "Mariano";
var nomeCompleto2 = primeiroNone + " " + segundoNome;
console.log(typeof nomeCompleto2);