// La fecha de hoy
let fechaHoy = new Date
console.log(fechaHoy)

// La fecha de tu nacimiento
let miNacimiento = new Date(1988, 11, 7)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let masTarde = fechaHoy > miNacimiento;
console.log(masTarde)

// Una variable que contenga el día de tu nacimiento
let diaNacimiento = miNacimiento.getDate()
console.log(diaNacimiento)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mesNaciemiento = miNacimiento.getMonth() + 1;
console.log(mesNaciemiento)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anioNacimiento = miNacimiento.getFullYear()
console.log(anioNacimiento)