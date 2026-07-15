import { Libro } from "../models/Libro.js";
import { mostrarLibros } from "../dom/render.js";
import { ESTADOS } from "../models/estados.js";
import {
    guardarLibro,
    manejarAccionesTabla,
    abrirModalAgregar
} from "./acciones.js";

export function inicializarEventos(gestorBiblioteca) {
    const formulario = document.querySelector("#form-libro");
    formulario.addEventListener("submit", (event) => {
        guardarLibro(event, gestorBiblioteca);
    });

    const tabla = document.querySelector("#cuerpo-tabla-libros");
    tabla.addEventListener("click", (event) => {
        manejarAccionesTabla(event, gestorBiblioteca);
    });

    const btnAgregar = document.querySelector("#btn-agregar");
    btnAgregar.addEventListener("click", abrirModalAgregar);
}
