var profissao = "DEV";
function dados() {
  var nome = "Leandro";
  var idade = 34;
  function outrosDados() {
    var endereço = 'casa';
    var idade = 35;
    return `${nome}, ${idade}, ${endereço}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados());
console.log(outrosDados());