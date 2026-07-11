import { Libro } from "../models/Libro.js";

const CLAVE_LIBROS = "biblioteca";

export function guardarLibros(libros) {
    localStorage.setItem(
        CLAVE_LIBROS,
        JSON.stringify(libros)
    );
}

export function cargarLibros() {
    const librosGuardados = localStorage.getItem(CLAVE_LIBROS);
    if (!librosGuardados) {
        return [];
    }
    const libros = JSON.parse(librosGuardados);

    return libros.map(
        libro => new Libro(libro)
    );
}