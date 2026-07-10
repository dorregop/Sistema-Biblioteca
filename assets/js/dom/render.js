export function mostrarLibros(libros){

const contenedor = document.querySelector("#cuerpo-tabla-libros");

libros.forEach(libro => {
    const claseEstado = libro.estado === "leído" ? "bg-success" : "bg-secondary";

    const tieneSaga = libro.saga === "" ? "N/A" : libro.saga;

    contenedor.innerHTML += `
    <tr>
        <th scope="row">${libro.titulo}</th>
        <td>
            <span class="badge rounded-pill ${claseEstado}">
                ${libro.estado}
            </span>
        </td>
        <td>${libro.autor}</td>
        <td>${tieneSaga}</td>
        <td class="text-center">${libro.numeroSaga}</td>
        <td>${libro.genero}</td>
        <td>
            <button class="btn btn-warning">Editar</button>
            <button class="btn btn-danger">Eliminar</button>
        </td>
    </tr>
    `;
});
}