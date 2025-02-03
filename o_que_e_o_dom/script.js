// window.alert('BOM DIA!!');

console.log(window);


window.innerHeight; // retorna o tamanho do browser

const href = window.location.href;
console.log(href)
if(href === 'http://127.0.0.1:5500/o_que_e_o_dom/index.html'){
    console.log('E verdade')
}


const h1Selecionado = document.querySelector("h1");
const h1classes = h1Selecionado.classList;

function callbackh1() {
  console.log("Clicou em", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);
