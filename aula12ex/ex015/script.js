function Enviar() {

    var res = window.document.getElementById(`resultado`)
    var nac = window.document.getElementById(`numero1`)
    var data = new Date()
    var ano = data.getFullYear()

    if (nac.value < 1000) {
        window.alert(`ERRO`)
    } else {
        var sex = window.document.getElementsByName(`sexo`)
        var idade = ano - Number(nac.value)
        var gênero = ''
        var img = window.document.createElement(`img`)
         img.setAttribute('id', 'imagem')

        if (sex[0].checked) {
            gênero = 'Homem'

             if (idade < 14) {
                //Criança
                img.setAttribute('src', 'imagem_criança_menino.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'imagem_jovem_menino.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem_adulto_homen.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem_idoso_homen.png')
            }
        } else if (sex[1].checked) {
            gênero = 'Mulher'

            
             if (idade < 14) {
                //Criança
                img.setAttribute('src', 'imagem_criança_menina.png')
            } else if (idade < 18) {
                //Jovem
                img.setAttribute('src', 'imagem_jovem_menina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem_adulta_mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem_idosa_mulher.png')
            }
        } 

        res.innerHTML = `Você tem ${idade} anos de idade e você é ${gênero}`
        res.appendChild(img)
    }
}