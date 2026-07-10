export class Libro {

    constructor(id, titulo, autor, genero, saga, numeroSaga, estado,) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.saga = saga;
        this.numeroSaga = numeroSaga;
        this.estado = estado;
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }

    actualizarDatos(datos) {
        this.titulo = datos.titulo;
        this.autor = datos.autor;
        this.genero = datos.genero;
        this.saga = datos.saga;
        this.numeroSaga = datos.numeroSaga;
        this.estado = datos.estado;
    }
}