// Una clase llamada "Estudiante" que tenga:
class Estudiante {
    
    // Una variable llamada nombre
    nombre = "Solves";

    // Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    asignaturas = ["JavaScript", "HTML", "CSS"]

    // Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas

        }
    }
}

// Crea una nueva instancia de "Estudiante"
const estudiante = new Estudiante()

// Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos())