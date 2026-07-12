import { obtenerLibros } from "./servicios/api.js";
import { mostrarLibros } from "./dom/render.js";
import { Biblioteca } from "./models/Biblioteca.js";
import { inicializarEventos } from "./eventos/eventos.js";

async function iniciarApp() {
    try {
        const libros = await obtenerLibros();
        const gestorBiblioteca = new Biblioteca(libros);
        mostrarLibros(gestorBiblioteca.libros);
        inicializarEventos(gestorBiblioteca);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

iniciarApp();