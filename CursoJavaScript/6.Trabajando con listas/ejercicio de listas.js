const lista = ["huevo", "leche","pan","agua", "verdudas"]

const nuevalista = lista.push("acite de girasol")

const listasinaceite = nuevalista.pop

const listapeliculas = [
    {
        titulo: "Titanic",
        director: "pepe",
        fecha: new Date(2000, 0, 1)
    },
    {
        titulo: "El 5to elemento",
        director: "Bruce Wille",
        fecha: new Date(2011, 0, 1)
    },
    {
        titulo: "La neranja mecanica",
        director: "Algun genio",
        fecha: new Date(1990, 0, 1)
    }
]

const posterior2010 = listapeliculas.filter ( p => p.fecha > new Date(2010,0,0) )

const directores = listapeliculas.map (p => {
    return p.director
})

const ar_lista = listapeliculas.map (i => {
    return i.titulo
}   )

const array_dir_tit = directores.concat(ar_lista)

const array_dir_tit1 = [...directores,...ar_lista]

console.log(array_dir_tit1)
