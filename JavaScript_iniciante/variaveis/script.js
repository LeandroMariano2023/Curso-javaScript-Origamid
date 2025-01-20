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

// mudar valor de variavel

var idade2 = 34;
idade2 = 35;
console.log(idade2);

let preco2 = 50;
preco2 = 25;
console.log(preco2);

const possuiFaculdades = true;
const possuiFaculdades = false;
