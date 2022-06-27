// Una cadena de texto con tu Nombre
let nombre = "Jose Manuel"
console.log(nombre)

// Otra cadena de texto con tu Apellido
let apellido = "Solves"
console.log(apellido)

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`
console.log(estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudainteMinus = estudiante.toLowerCase()
console.log(estudainteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroEstudiante = estudiante.length
console.log(numeroEstudiante)

// Una variable que contenga la primera letra del Nombre
let primeraNombre = nombre[0]
console.log(primeraNombre)

// Otra variable que contenga la última letra del Apellido
let ultimaApellido = estudiante.substring(estudiante.length-1)
console.log(ultimaApellido)

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let sinEspacios = estudiante.replace(/\s+/g, "")
console.log(sinEspacios)

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

let nombreEnEstudiante = estudiante.includes(nombre)
console.log(nombreEnEstudiante)
