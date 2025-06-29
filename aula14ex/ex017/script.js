
function calculado() {
    
        var cal = window.document.getElementById('calculando')
        var dv = window.document.getElementById('divisão')

    if (cal.value.lenght == 0) {
        window.alert('[ERRO]')
    } else {
        var r = Number(cal.value)
        dv.innerHTML =''

        for (c = 1; c <=10; c++) {
            var item = document.createElement('option')

            item.text = `${r}X${c}= ${r*c}`
            dv.appendChild(item)
        }
    }
}