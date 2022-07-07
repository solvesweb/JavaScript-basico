const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

parrafos.forEach((parrafo) => {
    parrafo.addEventListener("dragstart", (event) => {
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
        const elemento_fantasma = document.querySelector(".imagen-fantasma");
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0);
    });

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging");
    });
});

secciones.forEach((seccion) => {
    seccion.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    seccion.addEventListener("drop", (event) => {
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Parrafo id: ", id_parrafo);
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    });
});

const papelera = document.querySelector("#papelera");

papelera.addEventListener("dragover", (event) => {
    event.preventDefault();
});

papelera.addEventListener("drop", (event) => {
    const id_parrafo = event.dataTransfer.getData("id");
    document.getElementById(id_parrafo).remove();
});
