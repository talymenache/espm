function calcular() {
    let entrada = document.getElementById("minutos").value;
    let horas = parseInt(entrada / 60);
    let min = entrada % 60;
    saida.innerHTML = "O filme tem duração de " + horas + ":" + min;
  }