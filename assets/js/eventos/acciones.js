import { Libro } from "../models/Libro.js";
import { ESTADOS } from "../models/estados.js";
import { mostrarLibros, mostrarEstadisticas } from "../dom/render.js";

function actualizarVista(gestorBiblioteca){
    mostrarLibros(gestorBiblioteca.listarLibros());
    mostrarEstadisticas(gestorBiblioteca.listarLibros());
}

export function guardarLibro(event, gestorBiblioteca) {
    event.preventDefault();
    const datos = new FormData(event.target);
    const id = datos.get("id");
    const datosLibro = {
        titulo: datos.get("titulo"),
        autor: datos.get("autor"),
        genero: datos.get("genero"),
        saga: datos.get("saga")
    };

    if (id) {
        gestorBiblioteca.editarLibro(id, datosLibro);
        Swal.fire({
            icon: "success",
            title: "Libro actualizado correctamente"
        });
    } else {
        const libro = new Libro(datosLibro);
        gestorBiblioteca.agregarLibro(libro);
        Swal.fire({
            icon: "success",
            title: "Libro agregado correctamente"
        });
    }
    event.target.reset();
    document.querySelector("#id-libro").value = "";
    const modalElement = document.querySelector("#modalLibro");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }
    actualizarVista(gestorBiblioteca);
}

export function abrirModalAgregar() {
    const formulario = document.querySelector("#form-libro");
    formulario.reset();
    document.querySelector("#id-libro").value = "";
    document.querySelector("#titulo-modal").textContent = "Agregar libro";
    const modal = bootstrap.Modal.getOrCreateInstance(
        document.querySelector("#modalLibro")
    );
    modal.show();
}

export function abrirModalEditar(libro) {
    document.querySelector("#titulo").value = libro.titulo;
    document.querySelector("#autor").value = libro.autor;
    document.querySelector("#genero").value = libro.genero;
    document.querySelector("#saga").value = libro.saga;
    document.querySelector("#id-libro").value = libro.id;
    document.querySelector("#titulo-modal").textContent = "Editar libro";
    const modal = new bootstrap.Modal(
        document.querySelector("#modalLibro")
    );
    modal.show();
}

export function manejarAccionesTabla(event, gestorBiblioteca) {
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
                    text: "Estás intentando eliminar un libro " + libro.estado
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
                        actualizarVista(gestorBiblioteca)
                        Swal.fire({
                            title: "¡Eliminado!",
                            text: "Libro eliminado correctamente",
                            icon: "success"
                        });
                    }
                });
            }
            break;
        case "editar":
            abrirModalEditar(libro);
            return;
    }
    actualizarVista(gestorBiblioteca)
}