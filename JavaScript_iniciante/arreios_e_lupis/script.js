var videoGames = ["PC", "PS4", "XBOX"];
console.log(videoGames[1]);

// metodos e propriedades de uma ARRAY

var games = ["Switch", "PS5", "Xbox"];
console.log(games.pop()); // remove
console.log(games.push("3DS")); // adiciona
console.log(games.length); // conta
console.log(games);

// FOR LOOP
// possui 3 partes, inicio, condiçao, incremento

for (var numero = 0; numero <= 10; numero = numero + 2) {
  console.log(numero);
}

// While loop
var i = 0;
while (i <= 10) {
  console.log(i);
  i = i + 2; // incremento de 2 em 2
}

var videoGames = ["PC", "PS4", "XBOX", "3DS"];

for (var item = 0; item < 4; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}
// forEach
videoGames.forEach(function (item) {
  console.log(item);
});

var frutas = ["banana", "pera", "maçã", "abacaxi", "uva"];

frutas.forEach(function (fruta, index, array) {
  frutas.pop();
  console.log(fruta, index, frutas);
});

// outra sintaxe

var numero = 0;
var maximo = 50;
for (; numero < maximo; ) {
  console.log(numero);
  numero++;
}

//exercicio
//crie array com os anos que o brasil ganhou a copa
var anos = [1959, 1962, 1970, 1994, 2002];
console.log(anos[2]);

//