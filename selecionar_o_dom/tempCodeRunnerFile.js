const gridSection = document.querySelectorAll(".grid-section");
gridsection.forEach(function (gridItem, index, array) {
  gridItem.classList.add("azul");
  console.log(index);
  console.log(array);
});