function calcular() {

var cal = window.document.getElementById('calculando')
var re = window.document.getElementById('resultado')

    if (cal.value.lenght == 0) {
        window.alert(`[ERRO]`)
    } else {
        var rr = Number(cal.value)
        re.innerHTML = ''

        for (c = 1; c <= 10; c++) {
            var item = document.createElement('option')

            item.text = `${rr}x${c}=${rr*c}`

            re.appendChild(item)
        }
    }
}