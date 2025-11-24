const fora = document.querySelectorAll('.fora')
const quadradoVerde = document.querySelectorAll('.quadrado_verde')
const quadradoBranco = document.querySelectorAll('.quadrado_branco')
const peao = document.querySelectorAll('.peao')

let movimento

/*O que monitora o movumento das peças e suas ações */

const dragStart = (event) => {
    movimento = event.target
    console.log(movimento)
}

const dragOver = (event) => {
    event.preventDefault()
}

const drop = ({ target }) => {
    target.append(movimento)
}

/*O que faz as peças ficarem nos quadrados e executar diferentes movimentos */

fora.forEach((mes) => {

    mes.addEventListener("dragover", dragOver)
    mes.addEventListener("drop", drop)
})

quadradoVerde.forEach((verde) => {
    
    verde.addEventListener("dragover", dragOver)
    verde.addEventListener("drop", drop)
})

quadradoBranco.forEach((branco) => {

    branco.addEventListener("dragover", dragOver)
    branco.addEventListener("drop", drop)
})

peao.forEach((pen) => {
    pen.addEventListener("dragstart", dragStart)
})