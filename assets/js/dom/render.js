import { ESTADOS } from "../models/estados.js";
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


        const tieneSaga = libro.saga === "" ? "N/A" : libro.saga;
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
                        class="btn btn-outline-success"
                        data-accion="liberar"
                        data-id="${libro.id}">
                        Liberar Reserva
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
        case ESTADOS.PRESTADO:
            botones += `
                <td>
                    <button
                        class="btn btn-outline-success"
                        data-accion="devolver"
                        data-id="${libro.id}">
                        Devolver
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
    }
    return botones;
}