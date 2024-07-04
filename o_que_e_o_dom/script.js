// window.alert('BOM DIA!!');

const h1Selecionado = document.querySelector('h1');
const h1classes= h1Selecionado.classList;

function callbackh1(){
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1)