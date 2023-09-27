let tabela = document.getElementById("tabela")
let nome = document.getElementById("nome")
let ra = document.getElementById("ra")

function cadastrar() {
    let linha = tabela.insertRow(-1)
    let cNome = linha.insertCell(0)
    let cRa = linha.insertCell(1)

    cNome.innerHTML = nome.value
    cRa.innerHTML = ra.value
}
