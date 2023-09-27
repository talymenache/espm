function calcular() {
    let preco = document.getElementById("preco").value;
    let entrada = preco / 2;
    let saldo = entrada / 12;
    saida1.innerHTML = "Valor da Entrada: " + entrada.toFixed(2)
    saida2.innerHTML = "Saldo em 12x: " + saldo.toFixed(2)
  }