// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const misDatos = {nombre: "Jose Manuel",
                apellido: "Solves",
                fechaNacimiento: new Date(1988, 11, 7),
                altura: 184,
                eresDesarrollador: true}                

// Una variable que obtenga tu edad a partir del objeto anterior
let ahora = new Date()
let miEdad = ahora.getFullYear() - misDatos.fechaNacimiento.getFullYear()
console.log(miEdad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosPersonales = [{nombre: "Jose Manuel",
                        apellido: "Solves",
                        fechaNacimiento: new Date(1988, 11, 7),
                        altura: 184,
                        eresDesarrollador: true},
                        {nombre: "Patri",
                        apellido: "Navarro",
                        fechaNacimiento: new Date(1991, 4, 1),
                        altura: 160,
                        eresDesarrollador: true},
                        {nombre: "Perico",
                        apellido: "Pimpin",
                        fechaNacimiento: new Date(1997, 2, 25),
                        altura: 172,
                        eresDesarrollador: false}               ]

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = datosPersonales.sort((a, b) => a.fechaNacimiento - b.fechaNacimiento)