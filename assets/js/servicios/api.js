export async function obtenerLibros() {
    const response = await fetch("./db/libros.json");
    const data = await response.json();
    return data.libros;
}
