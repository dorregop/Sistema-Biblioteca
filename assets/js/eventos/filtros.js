import { mostrarLibros } from "../dom/render.js";
import { ESTADOS } from "../models/estados.js";

export function inicializarFiltros(gestorBiblioteca) {
    const inputBusqueda = document.querySelector("#texto-busqueda-filtro");
    inputBusqueda.addEventListener("input", () => {
        filtrarLibros(gestorBiblioteca);
    });

    const selectEstado = document.querySelector("#estado-filtro");
    selectEstado.addEventListener("change", () => {
        filtrarLibros(gestorBiblioteca);
    });

    const selectGenero = document.querySelector("#genero-filtro");
    selectGenero.addEventListener("change", () => {
        filtrarLibros(gestorBiblioteca);
    });

    const filtroReset = document.querySelector("#btn-limpiar-filtros");
    filtroReset.addEventListener("click", () => {
        limpiarFiltros(gestorBiblioteca);
    });
}

export function cargarEstados() {
    const selectEstado = document.querySelector("#estado-filtro");
    selectEstado.innerHTML = `
        <option value="">Todos los estados</option>
    `;

    Object.values(ESTADOS).forEach(estado => {
        const option = document.createElement("option");
        option.value = estado;
        option.textContent = estado;
        selectEstado.appendChild(option);
    });

}

export function cargarGeneros(gestorBiblioteca) {
    const selectGenero = document.querySelector("#genero-filtro");
    selectGenero.innerHTML = `
        <option value="">Todos los géneros</option>
    `;
    const generos = new Set();
    gestorBiblioteca.libros.forEach(libro => {
        generos.add(libro.genero);
    });
    const generosOrdenados = [...generos].sort();
    generosOrdenados.forEach(genero => {
        const option = document.createElement("option");
        option.value = genero;
        option.textContent = genero;
        selectGenero.appendChild(option);
    });
}

function filtrarLibros(gestorBiblioteca) {
    const texto = document
        .querySelector("#texto-busqueda-filtro")
        .value
        .trim()
        .toLowerCase();

    const estado = document.querySelector("#estado-filtro").value;
    const genero = document.querySelector("#genero-filtro").value;
    const librosFiltrados = gestorBiblioteca.libros.filter(libro => {
        const coincideTexto =
            libro.titulo.toLowerCase().includes(texto) ||
            libro.autor.toLowerCase().includes(texto);
        const coincideEstado =
            estado === "" || libro.estado.toLowerCase() === estado.toLowerCase();
        const coincideGenero =
            genero === "" ||
            libro.genero.toLowerCase() === genero.toLowerCase();

        return coincideTexto && coincideEstado && coincideGenero;
    });

    mostrarLibros(librosFiltrados);
}

function limpiarFiltros(gestorBiblioteca) {
    const inputBusqueda = document.querySelector("#texto-busqueda-filtro");
    const selectEstado = document.querySelector("#estado-filtro");
    const selectGenero = document.querySelector("#genero-filtro");

    inputBusqueda.value = "";
    selectEstado.value = "";
    selectGenero.value = "";

    filtrarLibros(gestorBiblioteca);
}

