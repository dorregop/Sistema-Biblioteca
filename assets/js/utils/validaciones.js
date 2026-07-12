function pedirTexto(campo) {
    while (true) {
        const texto = prompt(`Ingrese el ${campo}:`);
        if (texto === null) {
            return null;
        }
        if (esTextoValido(texto)) {
            return texto.trim();
        }
        alert("Texto inválido.");
    }
}

function esTextoValido(texto) {
    texto = texto.trim();
    if (texto.length === 0) {
        return false;
    }
    for (const caracter of texto) {
        if (!isNaN(caracter) && caracter !== " ") {
            return false;
        }
    }
    return true;
}