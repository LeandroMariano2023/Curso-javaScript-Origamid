var pessoa = {
  nome: "Leandro",
  idade: 33,
};
console.log(pessoa.idade);

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
};

console.log(quadrado.area(5));

// objeto sao reutilizaveis
Math.PI;
Math.random;

var pi = Math.PI;
console.log(pi);

console.log(Math.random());

// exercicio

// objeto com dados pessoais
var meusDados = {
  meuNome: "Leandro",
  meuSobrenome: "Mariano",
  minhaIdade: 34,
  minhaCidade: "SLDM",
};

//criar um metodo do objeto acima, que mostre seu nome completo

meusDados.nomeCompleto = function () {
  return `${this.meuNome} ${this.meuSobrenome}`;
};
console.log(meusDados.nomeCompleto());

// modificar propriedade
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
console.log(carro);

// crie um objeto de um cachorro que represente um labrador, preto de 10 anos, que late ao ver um homem
var cahorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return "latir";
    } else {
      return "nada";
    }
  },
};
console.log(cahorro);
console.log(cahorro.latir("homem"));
