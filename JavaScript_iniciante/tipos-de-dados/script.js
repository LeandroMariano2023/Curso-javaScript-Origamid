var nome = "Leandro"; // string
var idade = 33; // number
var time = null; // null
console.log(typeof  idade);

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