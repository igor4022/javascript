let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num.length}`)

let pas = num.indexOf(1)

if (pas == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pas}`)
}
