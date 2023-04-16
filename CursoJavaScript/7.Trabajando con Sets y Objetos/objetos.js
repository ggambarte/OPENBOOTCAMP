const usuario = {
        nombre: "Gonzalo", 
        apellido: "Gambarte", 
        edad: 38,  
        altura: 165, 
        eresDesarrollador: true
    }

let edad = usuario.edad

const lista = [
    {...usuario},
    {
        nombre: "JP", 
        apellido: "S", 
        edad: 39,  
        altura: 167, 
        eresDesarrollador: true
    },{
        nombre: "Luis", 
        apellido: "A", 
        edad: 27,  
        altura: 170, 
        eresDesarrollador: false
    }
]

const orde = lista.sort((a, b) => b.edad - a.edad)

console.log(orde)

