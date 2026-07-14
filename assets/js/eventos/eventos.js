import { Libro } from "../models/Libro.js";
import { mostrarLibros } from "../dom/render.js";
import { ESTADOS } from "../models/estados.js";

export function inicializarEventos(gestorBiblioteca) {
    const formulario = document.querySelector("#form-libro");
    formulario.addEventListener("submit", (event) => {
        agregarLibro(event, gestorBiblioteca);
    });

    const tabla = document.querySelector("#cuerpo-tabla-libros");
    tabla.addEventListener("click", (event) => {
        manejarAccionesTabla(event, gestorBiblioteca);
    });
}

function agregarLibro(event, gestorBiblioteca) {
    event.preventDefault();
    const datos = new FormData(event.target);
    const libro = new Libro({
        titulo: datos.get("titulo"),
        autor: datos.get("autor"),
        genero: datos.get("genero"),
        saga: datos.get("saga")
    });
    gestorBiblioteca.agregarLibro(libro);
    mostrarLibros(gestorBiblioteca.libros);
    event.target.reset();

    const modalElement = document.querySelector("#modalLibro");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
    Swal.fire({
        title: "Libro agregado correctamente!",
        icon: "success",
        draggable: true
    });
}

function manejarAccionesTabla(event, gestorBiblioteca) {
    const boton = event.target;

    if (!boton.matches("button")) {
        return;
    }

    const accion = boton.dataset.accion;
    const id = boton.dataset.id;
    const libro = gestorBiblioteca.buscarLibro(id);

    switch (accion) {
        case "reservar":
            libro.cambiarEstado(ESTADOS.RESERVADO);
            break;
        case "prestar":
            libro.cambiarEstado(ESTADOS.PRESTADO);
            break;
        case "liberar":
            libro.cambiarEstado(ESTADOS.DISPONIBLE);
            break;
        case "devolver":
            libro.cambiarEstado(ESTADOS.DISPONIBLE);
            break;
        case "eliminar":
            if (libro.estado === ESTADOS.PRESTADO || libro.estado === ESTADOS.RESERVADO) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No se puede realizar la acción.",
                    footer: "Estás intentando eliminar un libro no disponible."
                });
            } else {
                Swal.fire({
                    title: "¿Estás seguro?",
                    text: "No podrás revertir esta acción",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Sí, Elimínalo!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        gestorBiblioteca.eliminarLibro(id);
                        mostrarLibros(gestorBiblioteca.libros);
                        Swal.fire({
                            title: "¡Eliminado!",
                            text: "Libro eliminado correctamente",
                            icon: "success"
                        });
                    }
                });
            }
            break;
    }
    mostrarLibros(gestorBiblioteca.libros);
}