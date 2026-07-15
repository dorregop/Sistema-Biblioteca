import { mostrarLibros } from "../dom/render.js";

export function inicializarFiltros(gestorBiblioteca) {
    const inputBusqueda = document.querySelector("#texto-busqueda-filtro");
    inputBusqueda.addEventListener("input", () => {
        filtrarLibros(gestorBiblioteca);
    });

}

function filtrarLibros(gestorBiblioteca) {
    const texto = document
        .querySelector("#texto-busqueda-filtro")
        .value
        .trim()
        .toLowerCase();

    const libros = gestorBiblioteca.libros;

    const librosFiltrados = libros.filter(libro =>
        libro.titulo.toLowerCase().includes(texto) ||
        libro.autor.toLowerCase().includes(texto)
    );
    mostrarLibros(librosFiltrados);
}

function limpiarFiltros() {

}

