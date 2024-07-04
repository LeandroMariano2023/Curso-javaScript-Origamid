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
console.log(imc(80, 1.8))


function corFavorita(cor) {
    if (cor === 'azul') {
        return 'eu gotso do ceu';

    } else if (cor === 'verde') {
        return 'eu gosto de mato';
    } else {
        return 'eu nao gosto de cores';
    }

}
function mostrConsole() {
    console.log('OI')
}

addEventListener('click', mostrConsole);



function imc2(peso, altura) {
    const imc2 = peso / (altura ** 2);
    console.log(imc2);
}
imc2(20, 1.8);



function terceiraIdade(idade) {
    if (idade >= 60) {
        return true;
    } else {
        return false;
    }
}
console.log(terceiraIdade(60))


function terceiraIdade2(idade2) {
    if (typeof idade2 !== 'number') {
        return 'por favor preecha um numero'
    } else if (idade2 >= 60) {
        return true;
    } else {
        return false
    }
} 
console.log(terceiraIdade2('Oi'))

 var totalpaises = 193;
function faltaVisitar(paisesVisitados){
   
    return `Falta visitar ${totalpaises - paisesVisitados} paises`;
}
console.log(totalpaises);