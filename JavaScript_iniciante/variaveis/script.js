var nome = "Leandro";
var idade = "34";
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = "Mariano",
  cidade = "Recife";

console.log(sobrenome, cidade);

var semDefinir;
console.log(semDefinir);

console.log(aindaNaoDefinido);

//hoisting

console.log(nome);
var nome = "Leandro";
// retorna undefined

var profissao = "Designer";
console.log(profissao);
// retorna designer
