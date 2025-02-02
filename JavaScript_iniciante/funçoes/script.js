function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}
console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "eu gotso do ceu";
  } else if (cor === "verde") {
    return "eu gosto de mato";
  } else {
    return "eu nao gosto de cores";
  }
}
console.log(corFavorita("azul"));

function mostrConsole() {
  console.log("OI");
}

addEventListener("click", function () {
  console.log("Clicou");
});

function imc2(peso, altura) {
  const imc2 = peso / altura ** 2;
  console.log(imc2);
}
imc2(20, 1.8); // undefined

function terceiraIdade(idade) {
  if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

// nao e ideal retornar muitos tipos de dados
function terceiraIdade2(idade2) {
  if (typeof idade2 !== "number") {
    return "por favor preecha um numero";
  } else if (idade2 >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade2(90));

// so e possivel ver variaveis e funçoes fora do bloco.
var totalpaises = 193;
function faltaVisitar(paisesVisitados) {
  return `Falta visitar ${totalpaises - paisesVisitados} paises`;
}
console.log(faltaVisitar(100));

//funçoes conseguem acessar variaveis que vinheram antes e nao depois.
var profissao = "DEV";
function dados() {
  var nome = "Leandro";
  var idade = 34;
  function outrosDados() {
    var endereço = "casa";
    var idade = 35;
    return `${nome}, ${idade}, ${endereço}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());
// console.log(outrosDados());

// // criar uma funçao com valor truthy
// function isTruthy(dado) {
//   return !!dado;
// }

// crie uma funçao de perimetro do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}
console.log(perimetroQuadrado(4));

// funçao de nome completo
function nomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}
console.log(nomeCompleto("Leandro", "Mariano"));

// funçao par
function isPar(numero) {
  var modulo = numero % 2;
  if (modulo === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isPar(6));

// funçao tipo de dado
function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado([]));

//funçao de eventlistener
addEventListener("scroll", function () {
  console.log("Leandro Mariano");
});
