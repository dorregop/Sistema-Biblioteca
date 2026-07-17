import { obtenerLibros } from "./servicios/api.js";
import { mostrarEstadisticas, mostrarLibros, actualizarVista } from "./dom/render.js";
import { Biblioteca } from "./models/Biblioteca.js";
import { inicializarEventos } from "./eventos/eventos.js";
import { Libro } from "./models/Libro.js";
import { inicializarFiltros, cargarEstados, cargarGeneros } from "./eventos/filtros.js";

async function iniciarApp() {
    try {
        const libros = await obtenerLibros();
        const librosInstancia = libros.map(libro => new Libro(libro));
        const gestorBiblioteca = new Biblioteca(librosInstancia);
        mostrarLibros(gestorBiblioteca.libros);
        mostrarEstadisticas(gestorBiblioteca.libros);
        inicializarEventos(gestorBiblioteca);
        inicializarFiltros(gestorBiblioteca);
        cargarEstados();
        cargarGeneros(gestorBiblioteca);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

iniciarApp();