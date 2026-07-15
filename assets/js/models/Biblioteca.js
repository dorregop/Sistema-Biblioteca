export class Biblioteca {
    constructor(libros = []) {
        this.libros = libros;
    }

    agregarLibro(libro) {
        this.libros.unshift(libro);
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
    }

    editarLibro(id, datos) {
        const libro = this.buscarLibro(id);
        if (libro) {
            libro.actualizarDatos(datos);
        }
    }
}