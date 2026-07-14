import { ESTADOS } from "./estados.js";
export class Libro {

    constructor({ titulo, autor, genero, saga, estado = ESTADOS.DISPONIBLE, id = crypto.randomUUID() }) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.saga = saga;
        this.estado = estado;
        this.id = id;
    }

    cambiarEstado(nuevoEstado) {
        nuevoEstado = nuevoEstado;

        if (nuevoEstado === this.estado) {
            return false;
        }

        switch (this.estado) {
            case ESTADOS.DISPONIBLE:
                if (nuevoEstado === ESTADOS.RESERVADO || nuevoEstado === ESTADOS.PRESTADO) {
                    this.estado = nuevoEstado;
                    return true;
                }
                break;
            case ESTADOS.RESERVADO:
            case ESTADOS.PRESTADO:
                if (nuevoEstado === ESTADOS.DISPONIBLE) {
                    this.estado = nuevoEstado;
                    return true;
                }
                break;
        }
        return false;
    }

    actualizarDatos({ titulo, autor, genero, saga }) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.saga = saga;
    }
}