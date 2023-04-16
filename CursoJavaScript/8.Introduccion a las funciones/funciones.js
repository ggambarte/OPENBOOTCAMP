
function verdadero() {
    return true
}

const ver = verdadero()

console.log(ver)


/////////////////////////////////////////////////////////////////////

async function Asinc() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

Asinc()

/////////////////////////////////////////////////////////////////////

function* idsPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const indice = idsPares()

console.log(indice.next().value)
console.log(indice.next().value)
console.log(indice.next().value)
