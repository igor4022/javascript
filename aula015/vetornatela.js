let valor = [8, 7, 4, 1, 0]
valor.sort()

// Primeiro jeito de fazer

/*
for(let pas = 0; pas < valor.length; pas++) {
    console.log(`A posição ${pas} tem o valor ${valor[pas]}`)
}
*/

for (let pas in valor) {
    console.log(`A posição ${pas} tem o valor${valor[pas]}`)
}