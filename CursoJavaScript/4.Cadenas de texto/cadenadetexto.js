let nombre = "Gonzalo"
let apellido = "Gambarte"
let estudiante = (nombre + " " + apellido) 
let estudianteMayus = estudiante.toUpperCase(estudiante)
let estudianteMinus = estudiante.toLowerCase(estudiante)
let estudianteLength = estudiante.length
let nombreLetraPrimera = estudiante.substring(0,1)
let apellidoLetraUltima = apellido.substring(apellido.length, apellido.length-1)
let estudianteSinEspacio = estudiante.replace(" ","")
estudianteConNombre = estudiante.includes(nombre)

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudianteLength)
console.log(nombreLetraPrimera)
console.log(apellidoLetraUltima)
console.log(estudianteSinEspacio)
console.log(estudianteConNombre)