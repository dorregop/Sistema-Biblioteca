import { ESTADOS } from "../models/estados.js";
export function mostrarLibros(libros) {
    const contenedor = document.querySelector("#cuerpo-tabla-libros");
    let html = "";
    libros.forEach(libro => {
        let claseEstado;
        switch (libro.estado.toLowerCase()) {
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
                <td>
                    <button
                        class="btn btn-warning"
                        data-accion="estado"
                        data-id="${libro.id}">
                        Cambiar Estado
                    </button>
                    <button
                        class="btn btn-danger"
                        data-accion="eliminar"
                        data-id="${libro.id}">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;

        contenedor.innerHTML = html;
    });
}