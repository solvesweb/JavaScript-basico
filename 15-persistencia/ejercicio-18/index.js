const nombre = "Jose Manuel"
const apellido = "Solves"

const nombreCompleto = {
    nombre,
    apellido
}

sessionStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto))

localStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto))

const now = new Date()
document.cookie = `nombreCompleto=${JSON.stringify(nombreCompleto)};expires=${new Date(now.getTime() + 2 * 60000)}`