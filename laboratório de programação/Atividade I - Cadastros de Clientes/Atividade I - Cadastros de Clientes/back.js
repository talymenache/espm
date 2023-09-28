let clientecpf = []
let clientenome = []
let clientemega = []
let valorpagar = []


function cadastrar() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let tabela = document.getElementById("tabela")
    let lista = document.getElementById("lista")

    let cpfExiste = false

    for (let i = 0; i < clientecpf.length; i++) {
        if (clientecpf[i] == cpf) {
            cpfExiste = true
            break
        }
    }
    // Aqui tínhamos pensado em colocar mais um If verificando se o número informado tem 11 caracteres
    // mas não colocamos para não ficar tão chato de testar
    if (cpfExiste) {
        saida.innerHTML = "CPF já encontrado"
    } else if (cpf == '') {
        saida.innerHTML = "Insira um CPF"
    } else if (nome == '' || megabytes == '') {
        saida.innerHTML = "Insira um nome e/ou megabytes"
    } else if (cpf < 0) {
        saida.innerHTML = "Insira um CPF válido"
    } else if (megabytes < 0) {
        saida.innerHTML = "Megabytes negativos não são aceitos"
    } else {
        clientecpf.push(cpf)
        clientenome.push(nome)
        clientemega.push(megabytes)

        saida.innerHTML = "Dados cadastrados"

        let linha = document.createElement("tr")
        linha.id = "armazenado-" + cpf
        let celula = document.createElement("td")
        celula.textContent = cpf
        linha.appendChild(celula)

        celula = document.createElement("td")
        celula.textContent = nome
        linha.appendChild(celula)

        celula = document.createElement("td")
        celula.textContent = megabytes
        linha.appendChild(celula)

        tabela.appendChild(linha);

        lista.innerHTML = ""

        // cCPF.innerHTML = cpf
        // cNome.innerHTML = nome
        // cMega.innerHTML = megabytes
    }
}

function pesquisar() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let pesquisa = document.getElementById("pesquisa")
    let clienteindice = -1

    let valorpacote = 10
    let taxaextra = 0
    let consumocliente = 0
    let resultado = 0
    let real = "R$"

    valorpagar.length = 0

    for (let i = 0; i < clientemega.length; i++) {
        if (clientemega[i] > 200) {
            consumocliente = clientemega[i]
            taxaextra = ((3 / 100) / 200) * valorpacote
            resultado = consumocliente * taxaextra
            resultado = real + resultado.toFixed(1)
            valorpagar.push(resultado)
        } else {
            resultado = real + 0
            valorpagar.push(resultado)
        }
    }

    for (let j = 0; j < clientecpf.length; j++) {
        if (clientecpf[j] == cpf) {
            clienteindice = j
            break
        }
    }

    if (cpf == '') {
        saida.innerHTML = "Insira um CPF cadastrado para pesquisar"
        while (pesquisa.firstChild) {
            pesquisa.removeChild(pesquisa.firstChild)
        }
    } else if (clienteindice == -1) {
        saida.innerHTML = "CPF não encontrado"
        while (pesquisa.firstChild) {
            pesquisa.removeChild(pesquisa.firstChild)
        }
    } else {

        for (let i = 0; i < clientecpf.length; i++) {
            if (clientecpf[i] == cpf) {
                saida.innerHTML = "CPF encontrado"
                let saidacpf = clientecpf[i]
                let saidanome = clientenome[i]
                let saidamega = clientemega[i]
                let saidadevendo = valorpagar[i]

                while (pesquisa.firstChild) {
                    pesquisa.removeChild(pesquisa.firstChild)
                }

                let linha = document.createElement("tr")
                let celula = document.createElement("td")
                celula.textContent = saidacpf
                linha.appendChild(celula)

                celula = document.createElement("td")
                celula.textContent = saidanome
                linha.appendChild(celula)

                celula = document.createElement("td")
                celula.textContent = saidamega
                linha.appendChild(celula)

                celula = document.createElement("td")
                celula.textContent = saidadevendo
                linha.appendChild(celula)


                pesquisa.appendChild(linha)
            }
        }
    }
}

function alterar() {

    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let tabela = document.getElementById("tabela")
    let lista = document.getElementById("lista")
    let pesquisa = document.getElementById("pesquisa")
    let clienteindice = -1

    for (let j = 0; j < clientecpf.length; j++) {
        if (clientecpf[j] == cpf) {
            clienteindice = j
            break;
        }
    }

    if (cpf == '') {
        saida.innerHTML = "Insira um CPF cadastrado para alterar"
    } else if (clienteindice == -1) {
        saida.innerHTML = "CPF não encontrado"
    } else if (nome == '' && megabytes == '') {
        saida.innerHTML = "Insira um nome e/ou megabytes para alterar"
    } else {

        // for (let i = 0; i < clientecpf.length; i++) {

        let celulas = document.querySelectorAll("#armazenado-" + cpf + " > td")

        if (clientecpf[clienteindice] == cpf && megabytes == '') {
            saida.innerHTML = "Dados atualizados"
            clientenome[clienteindice] = nome
            celulas[1].textContent = nome
        } else if (clientecpf[clienteindice] == cpf && nome == '') {
            saida.innerHTML = "Dados atualizados"
            clientemega[clienteindice] = megabytes
            celulas[2].textContent = megabytes
        } else {
            saida.innerHTML = "Dados atualizados"
            clientenome[clienteindice] = nome
            clientemega[clienteindice] = megabytes
            celulas[1].textContent = nome
            celulas[2].textContent = megabytes
        }
        // }
    }

    for (let h = 0; h < clientecpf.length; h++) {

        if (clientecpf[h] == cpf) {
            let linhaexistente = tabela.querySelector("tr[data-cpf='" + cpf + "']")

            if (linhaexistente) {
                linhaexistente.innerHTML = ""
                let linha = document.createElement("tr")
                let celula = document.createElement("td")
                celula.textContent = cpf
                linha.appendChild(celula)

                celula = document.createElement("td")
                celula.textContent = nome
                linha.appendChild(celula)

                celula = document.createElement("td")
                celula.textContent = megabytes
                linha.appendChild(celula)

                tabela.appendChild(linha)
            }
        }
    }
    lista.innerHTML = ""
    pesquisa.innerHTML = ""
}

function remover() {

    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")

    let tabela = document.getElementById("tabela")
    let lista = document.getElementById("lista")
    let pesquisa = document.getElementById("pesquisa")

    if (cpf == '') {
        saida.innerHTML = "Insira um CPF cadastrado para excluir"
    } else {

        for (let i = 0; i < clientecpf.length; i++) {

            if (clientecpf[i] == cpf) {
                let j = i
                saida.innerHTML = "Dados removidos"
                clientecpf.splice(j, 1)
                clientenome.splice(j, 1)
                clientemega.splice(j, 1)
                valorpagar.splice(j, 1)

                // clientecpf[i] = ""
                // clientenome[i] = ""
                // clientemega[i] = ""
                // valorpagar[i] = ""

                // let celulas = document.querySelectorAll("#armazenado-" + cpf + " > td")

                // celulas[0].textContent = ""
                // celulas[1].textContent = ""
                // celulas[2].textContent = ""

                let linharemover = document.getElementById("armazenado-" + cpf)
                linharemover.remove()

                lista.innerHTML = ""
                pesquisa.innerHTML = ""
            }
        }
    }
}

function lista() {
    let cpf = document.getElementById("cpf").value
    let nome = document.getElementById("nome").value
    let megabytes = document.getElementById("megabytes").value
    let saida = document.getElementById("saida")
    let lista = document.getElementById("lista")
    let valorpacote = 10
    let taxaextra = 0
    let consumocliente = 0
    let resultado = 0
    let real = "R$"

    if(clientecpf.length == 0) {
        saida.innerHTML = "Nenhum dado ainda para ser listado"
    } else {

    lista.innerHTML = ""
    valorpagar.length = 0

    for (let i = 0; i < clientemega.length; i++) {
        if (clientemega[i] > 200) {
            consumocliente = clientemega[i]
            taxaextra = ((3 / 100) / 200) * valorpacote
            resultado = consumocliente * taxaextra
            resultado = real + resultado.toFixed(1)
            valorpagar.push(resultado)
        } else {
            resultado = real + 0
            valorpagar.push(resultado)
        }
    }

    for (let i = 0; i < clientecpf.length; i++) {
        saida.innerHTML = "Dados listados"
        let linha = document.createElement("tr")
        let celula = document.createElement("td")
        celula.textContent = clientecpf[i]
        linha.appendChild(celula)

        celula = document.createElement("td")
        celula.textContent = clientenome[i]
        linha.appendChild(celula)

        celula = document.createElement("td")
        celula.textContent = clientemega[i]
        linha.appendChild(celula)

        celula = document.createElement("td")
        celula.textContent = valorpagar[i]
        linha.appendChild(celula)

        lista.appendChild(linha)
        }
    }
}

function amrmazene() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = "Cadastre um cliente inserindo seu CPF, nome e megabytes (todos são necessários) clicando no botão Armazenar"
}

function pesquise() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = "Pesquise qualquer cliente inserindo apenas o número de seu CPF e clicando no botão Pesquisar (Toda vez que um dado seja alterado ou removido é necessário clicar no botão novamente para pesquisar)"
}

function altera() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = "Altere qualquer dado de qualquer cliente menos o CPF, insira o CPF, depois o nome e/ou megabytes que deseja alterar na caixa de texto e clique no botão Alterar"
}

function remove() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = "Remova qualquer cliente apenas inserindo seu CPF e clicando no botão de Remover"
}

function liste() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = "Liste todos os clientes e saiba quanto cada um está devendo clicando no botão de Lista (Toda vez que um dado seja alterado ou removido é necessário clicar no botão novamente para listar)"
}


function sai() {
    let explicacao = document.getElementById("explicacao")
    explicacao.innerHTML = ""
}

// function atualizar() {
//     console.log(clientecpf)
//     console.log(clientenome)
//     console.log(clientemega)
//     console.log(valorpagar)
// }
