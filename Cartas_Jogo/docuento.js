const cartas = document.querySelectorAll(".carta")
const locals = document.querySelectorAll(".local")
const mesas = document.querySelectorAll(".mesa")

let movimento 


const dragStart = (event) => {
    movimento = event.target
    console.log(movimento)
}

const dragOver = (event) => {
    event.preventDefault()
}

const drop = ({ target }) => {
    target.append(movimento)
    
    const numero = Math.floor(Math.random() * 500) + 1
    const numero2 = Math.floor(Math.random() * 500) + 1

    document.getElementById("valor").textContent = numero

    document.getElementById("valor2").textContent = numero2
  
}

const apagarCarta = (event) => {
    event.preventDefault()
    cartas.remove()
}

/*Colocação de campo de batalha / FUNÇÕES de CAMPO*/

mesas.forEach((cas) => {

    cas.addEventListener("drop", drop)
    cas.addEventListener("dragover", dragOver)
})
/*Colocação da mesa do jogador / FUNÇÔES de MESA*/

locals.forEach((cal) => {

    cal.addEventListener("drop", drop)
    cal.addEventListener("dragover", dragOver)
})
/*colocação das cartas / FUNÇÔES das CARTAS */

cartas.forEach((card) => {

    card.addEventListener("dragstart", dragStart)
    card.addEventListener("contextmenu", apagarCarta)
})