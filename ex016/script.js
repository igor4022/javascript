function resultado() {

    var inc = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var i = Number(inc.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    var cal = window.document.getElementById('calculando')
    var m = i, f, p
    var r = window.document.getElementById('resultado')

    if (cal + m ) {
        for (var c = i;c <= f;c + p ) {
            r.innerHTML + `${c}`
        }
    }
}