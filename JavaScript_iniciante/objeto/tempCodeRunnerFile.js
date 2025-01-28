var cahorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return "latir";
    } else {
      return "nada";
    }
  },
};
console.log(cahorro);
console.log(cahorro.latir("homem"));