var idade = 33;

console.log(idade);
// operadores aritimeticos (Binarios)
var soma = 100 + 50;
var subtraçao = 100 - 50;
var multiplicaçao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

console.log(soma, subtraçao, multiplicaçao, divisao, expoente, modulo);

// operadores aritimeticos(String)

var soma = "100" + 50;
var subtraçao = "100" - 50;
var multiplicaçao = "100" * "2";
var divisao = "comprei 10" / 2;

console.log(soma, subtraçao, multiplicaçao, divisao);

// NAN  = Not a Number
var numero = 80;
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = peso / 2;

console.log(numero, unidade, peso, pesoPorDois);

// Ordem de operaçoes
// começa por multiplicaçao e divisao, depois soma e subtraçao, prioridade pelo que estiver dentro de parenteses.

var total1 = 20 + 5 * 2;
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;

console.log(total1, total2, total3, total4);

// operadores aritimeticos (Unarios)
// so tem um numero na equaçao

var incremento = 5;
console.log(incremento++);
console.log(incremento);

var incremento2 = 5;
console.log(++incremento2);
console.log(incremento2);
