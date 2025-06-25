var agora = new Date()
var hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)

if(hora < 12) {
    console.log(`Bom dia!`)
} else if(hora <= 18) {
    console.log(`Boa Tarde!`)
} else if(hora <= 24){
    console.log(`Boa noite!`)
} else {
    console.log(`Sé tem insonia né cara?`)
}

/*
        ___   _
        /   '-/  ]           ,,,
        [  ]=@==============#   ]
        /_______--]          ,,,    IGOR...(-_-)

*/