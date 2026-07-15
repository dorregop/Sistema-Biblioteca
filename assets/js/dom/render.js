import { ESTADOS } from "../models/estados.js";
export function mostrarEstadisticas(libros) {
    const contenedor = document.querySelector("#mostrar-estadisticas");
    if (!contenedor) {
        return;
    }
    let html = "";
    let disponibles = 0;
    let reservados = 0;
    let prestados = 0;
    libros.forEach(libro => {
        switch (libro.estado) {
            case ESTADOS.DISPONIBLE:
                disponibles++;
                break;
            case ESTADOS.RESERVADO:
                reservados++;
                break;
            case ESTADOS.PRESTADO:
                prestados++
                break;
        }
    });
    html += `
        <ul>
            <li>Total libros: ${libros.length}</li>
            <li>Libros Disponibles: ${disponibles}</li>
            <li>Libros Prestados: ${prestados}</li>
            <li>Libros Reservados: ${reservados}</li>
        </ul>
        `
    contenedor.innerHTML = html;
}

export function mostrarLibros(libros) {
    const contenedor = document.querySelector("#cuerpo-tabla-libros");
    let html = "";
    libros.forEach(libro => {
        let claseEstado;
        switch (libro.estado) {
            case ESTADOS.DISPONIBLE:
                claseEstado = "bg-success";
                break;
            case ESTADOS.RESERVADO:
                claseEstado = "bg-secondary";
                break;
            case ESTADOS.PRESTADO:
                claseEstado = "bg-warning";
                break;
        }

        const tieneSaga = libro.saga || "N/A";
        html += `
            <tr>
                <th scope="row">${libro.titulo}</th>
                <td>
                    <span class="badge rounded-pill ${claseEstado}">
                        ${libro.estado}
                    </span>
                </td>
                <td>${libro.autor}</td>
                <td>${tieneSaga}</td>
                <td>${libro.genero}</td>
                ${crearBotonesAcciones(libro)}
            </tr>
        `;
    });
    contenedor.innerHTML = html;
}

function crearBotonesAcciones(libro) {
    let botones = "";
    switch (libro.estado) {
        case ESTADOS.DISPONIBLE:
            botones += `
                    <td>
                    <button
                        class="btn btn-outline-primary"
                        data-accion="editar"
                        data-id="${libro.id}">
                        Editar
                    </button>
                    <button
                        class="btn btn-outline-secondary"
                        data-accion="reservar"
                        data-id="${libro.id}">
                        Reservar
                    </button>
                    <button
                        class="btn btn-outline-warning"
                        data-accion="prestar"
                        data-id="${libro.id}">
                        Prestar
                    </button>
                    <button
                        class="btn btn-outline-danger"
                        data-accion="eliminar"
                        data-id="${libro.id}">
                        Eliminar
                    </button>
                </td>
            `
            break;
        case ESTADOS.RESERVADO:
            botones += `
                <td>
                    <button
                        class="btn btn-outline-primary"
                        data-accion="editar"
                        data-id="${libro.id}">
                        Editar
                    </button>
                    <button
                        class="btn btn-outline-success"
                        data-accion="liberar"
                        data-id="${libro.id}">
                        Liberar Reserva
                    </button>
                </td>
            `
            break;
        case ESTADOS.PRESTADO:
            botones += `
                <td>
                    <button
                        class="btn btn-outline-primary"
                        data-accion="editar"
                        data-id="${libro.id}">
                        Editar
                    </button>
                    <button
                        class="btn btn-outline-success"
                        data-accion="devolver"
                        data-id="${libro.id}">
                        Devolver
                    </button>
                </td>
            `
            break;
    }
    return botones;
}

function actualizarVista(gestorBiblioteca) {
    gestorBiblioteca.listarLibros();
    mostrarEstadisticas(gestorBiblioteca.libros);
}