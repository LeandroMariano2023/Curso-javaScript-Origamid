var possuiGraduaçao = false
var possuiDoutorado = true

if (possuiGraduaçao) {
    console.log('É verdade');

} else if ('Possui Doutorado') {
    console.log('possui doutorado');
} else {
    console.log('Nao possui nada')
}

var nome = 'leandro'

if (nome) {
    console.log(nome)
} else {
    console.log('No existe')
}

var x = 10;

console.log(x !== 11)

// && retornal o ultimo falso
if ((5 - 5) && (5 + 5)) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

var condicional = (5 - 10) && (5 + 5)
if (condicional) {
    console.log('verdadeiro');
} else {
    console.log('falso');
}

// || retorna primeiro verdadeiro

var condicional2 = (5 - 5) || (5 + 5);
console.log(condicional2)


// switch verifica se a variavel e igual à diferentes valores


var corFavorita = 'verde'

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu')
        break;

    case 'Amarelo':
        console.log('Olhe para o sol')
        break;
    case 'verde':
        console.log('Olhe para s floresta')
        break;
    default:
        console.log('Feche os olhos')

}