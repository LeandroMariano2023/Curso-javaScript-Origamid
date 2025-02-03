//atribuiçao
var numero = 20;
var numero2 = 10;

numero += numero2; //numero = numero + numero2
console.log(numero);

// operador ternario
// condiçao ? , true, false

var idade = 20;
var naoPossuiDiabetes = true;
var podeBeber;
podeBeber = idade >= 18 && naoPossuiDiabetes ? "pode Beber" : "nao pode Beber";

console.log(podeBeber);

//If abreviado

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Sim possui");
else console.log("Nao possui");