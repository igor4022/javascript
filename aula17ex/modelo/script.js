let clic = window.document.getElementById('digite')
let res = window.document.getElementById('conta')
let valores = []

let fim = window.document.getElementById('final')

function clicar() {
    if (clic.value.lengeth == 0) {
        window.alert('[ERRO]')
    } else {
        
        let item = document.createElement('option')

        valores.push(Number(clic.value))
        item.text = `Valor ${clic.value} adicionado`
        res.appendChild(item)
    }
}

clic.value = ''
clic.focus()

function resultado() {
    if (valores.lenght == 0) {
        window.alert('[ERRO]')
    } else {
        let tot = valores.lengeth
        
        fim.innerHTML = ''
        fim.innerHTML += `${tot}`
    }
}