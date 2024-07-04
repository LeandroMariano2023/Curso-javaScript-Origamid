var videoGames = ['PC', 'PS4', 'XBOX']
console.log(videoGames[1])



// FOR LOOP
// possui 3 partes, inicio, condiçao, incremento 

for (var numero = 0; numero < 4; numero++) {
    console.log(numero)
}

// While loop
var i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}


var videoGames = ['PC', 'PS4', 'XBOX', '3DS'];

for (var item = 0; item < 4; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === 'PS4') {
        break; 
    }
}


videoGames.forEach(function(item){
    console.log(  item)
})

var frutas = ['banana', 'pera', 'maçã', 'abacaxi', 'uva']

frutas.forEach(function(fruta, index){
    frutas.pop();
    console.log(fruta, index, frutas)
});