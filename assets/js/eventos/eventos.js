import { Libro } from "../models/Libro.js";
import { mostrarLibros } from "../dom/render.js";

export function inicializarEventos(gestorBiblioteca){
    const formulario = document.querySelector("#form-libro");
    formulario.addEventListener("submit",(event)=>{
        agregarLibro(event, gestorBiblioteca);
    });
}

function agregarLibro(event, gestorBiblioteca){
    event.preventDefault();
    const datos = new FormData(event.target);
    const libro = new Libro({
        titulo : datos.get("titulo"),
        autor : datos.get("autor"),
        genero : datos.get("genero"),
        saga : datos.get("saga")
    });
    gestorBiblioteca.agregarLibro(libro);
    mostrarLibros(gestorBiblioteca.libros);
    event.target.reset();

    const modalElement = document.querySelector("#modalLibro"); 
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
}