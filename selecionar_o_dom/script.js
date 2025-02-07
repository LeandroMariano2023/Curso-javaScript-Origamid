// const animais = document.getElementById("animais");
// console.log(animais);

// const gridsection = document.getElementsByTagName("grid-section");
// console.log(gridsection);

// const contato = document.getElementsByClassName("grid-section contato");
// console.log(contato);

// const ul = document.getElementsByTagName("ul");
// console.log(ul);

// // queryselector retorna o primeiro elemento que combina com o seu seletor css.

// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl);

// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos.href);

// const animaisImg = document.querySelectorAll(".animais img");
// console.log(animaisImg);

// // HTMcolection ves NODElist

// const gridsectionHTML = document.getElementsByClassName("grid-section");
// const gridsectionNode = document.querySelectorAll(".grid-section");

// primeiraUl.classList.add("grid-section");

// console.log(gridsectionHTML[0]);
// console.log(gridsectionNode[0]);

// Array-Like
// const gridSection = document.querySelectorAll(".grid-section");
// gridsection.forEach(function (gridItem, index, array) {
//   gridItem.classList.add("azul");
//   console.log(index);
//   console.log(array);
// });

// EXERCICIOS

// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]'); 
console.log(linkInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const animais=document.querySelectorAll

// Selecione o último p do sit
