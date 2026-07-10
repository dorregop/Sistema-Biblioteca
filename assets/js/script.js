import { obtenerLibros } from "./servicios/api.js";
import { mostrarLibros } from "./dom/render.js";

async function iniciarApp() {
    try {
        const libros = await obtenerLibros();
        console.log(libros);
        mostrarLibros(libros);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

iniciarApp();