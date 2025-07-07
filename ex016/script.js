function resultado() {

    var inc = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var i = Number(inc.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    var r = window.document.getElementById('resultado')
    if (i > f)
        for (var c = i; c <= f; c += p ) {
            r.innerHTML += `${c}`
        } else {
            for (var c = i; c >= f; c-=p)
                r.innerHTML += `${c}`
        }
    
    }               