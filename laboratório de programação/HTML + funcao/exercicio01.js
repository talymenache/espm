function converter() {
  let entrada = document.getElementById("entrada").value;
  let saida = document.getElementById("saida");
  let aux = ((entrada - 32) * 5) / 9;
  saida.innerHTML = aux;
}
