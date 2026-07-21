import { Libro } from "./Libro.js";
export class Biblioteca {
    constructor(libros = []) {
        this.libros = libros;
    }

    agregarLibro(libro) {
        this.libros.unshift(libro);
        this.guardarEnLocalStorage();
    }

    buscarLibro(id) {
        return this.libros.find(
            libro => libro.id === id
        );
    }

    eliminarLibro(id) {
        this.libros = this.libros.filter(
            libro => libro.id !== id
        );
        this.guardarEnLocalStorage();
    }

    editarLibro(id, datos) {
        const libro = this.buscarLibro(id);
        if (libro) {
            libro.actualizarDatos(datos);
            this.guardarEnLocalStorage();
        }
    }

    guardarEnLocalStorage() {
        localStorage.setItem(
            "biblioteca",
            JSON.stringify(this.libros)
        );
    }

    cargarDesdeLocalStorage() {
        const datos = localStorage.getItem("biblioteca");
        if (!datos) {
            return;
        }
        const libros = JSON.parse(datos);
        this.libros = libros.map(libro => new Libro(libro));
    }
}