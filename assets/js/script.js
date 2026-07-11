import { obtenerLibros } from "./servicios/api.js";
import { mostrarLibros } from "./dom/render.js";
import { guardarLibros, cargarLibros } from "./servicios/storage.js";

async function iniciarApp() {
    try {
        const libros = await obtenerLibros();
        console.log(libros);
        mostrarLibros(libros);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
    }
}

const libros = [
    {
        titulo: "El Ojo del Mundo",
        autor: "Robert Jordan"
    }
];

guardarLibros(libros);

console.log(cargarLibros());

iniciarApp();