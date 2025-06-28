function carregar() {
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data= new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `agora são ${hora} horas e ${minuto} minutos`

    if (hora >= 0 && hora < 12) {
        // Bom dia flor do dia!
        img.src = 'imagem_dia.png.png'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde bela adoremecida!
        img.src = 'imagem_tarde.png.png'
        document.body.style.background = `#e8ff71`
    } else {
        // I sé ta vivo...QUE DIZER!....BOa noite dorminhoco
        img.src = 'imagem_noite.png.png'
        document.body.style.background = `#3a2e2e`
    }
}