let cliente = []

function cadastrar() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value

    let cpfExiste = false

    for(let j = 0; j < cliente.length; j++) {
        if(cliente[j].cpf == cpf) {
            cpfExiste = true
            break
        }
    }

    if (cpfExiste) {
        alert("CPF já cadastrado") 
    } else {
        cliente.push({ cpf: cpf, nome: nome, megabytes: megabytes })
        console.log(cliente)
    }
}

function pesquisar() {
    let cpf = document.getElementById("cpf").value
    let saida = document.getElementById("saida")
    let achoucliente = 0

    for(let j = 0; j < cliente.length; j++) {
        if(cliente[j].cpf == cpf) {
            achoucliente = cliente[j]
            saida.innerHTML = "Nome:  " + achoucliente.nome + " Megabytes:  " + achoucliente.megabytes 
            return
        } else {
            saida.innerHTML = "CPF não encontrado"  
        }
    }
}

function alterar() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let achoucliente = 0

    for(let j = 0; j < cliente.length; j++) {
        if(cliente[j].cpf == cpf) {
            achoucliente = cliente[j]
            cliente[j] = nome
            cliente[j] = megabytes
            
            saida.innerHTML = "Dados do cliente removidos com sucesso"
        } else {
            saida.innerHTML = "CPF não encontrado"   
        }
    }
}

function remover() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let achoucliente = 0

    for(let j = 0; j < cliente.length; j++) {
        if(cliente[j].cpf == cpf) {
            achoucliente = cliente[j]
            cliente[j] = nome
            cliente[j] = megabytes
            
            saida.innerHTML = "Dados do cliente removidos com sucesso"
        }
    }
}

function lista() {
    let saida = document.getElementById("saida")
    saida.innerHTML = ""

    for(let j = 0; j < cliente.length; j++) {
        let cpf = cliente[j].cpf
        let nome = cliente[j].nome
        let megabytes = cliente[j].megabytes
        
        saida.innerHTML += "CPF: " + cpf + "<br>"
        saida.innerHTML += "Nome: " + nome + "<br>"
        saida.innerHTML += "Megabytes: " + megabytes + "<br><br>"
    }
}
