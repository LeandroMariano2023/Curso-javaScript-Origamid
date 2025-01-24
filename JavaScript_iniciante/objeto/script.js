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
  perimetro(lado) {
    // console.log(this.lados);
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// objeto sao reutilizaveis
Math.PI;
Math.random;

var pi = Math.PI;
console.log(pi);

console.log(Math.random());
