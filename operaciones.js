function suma(a, b) {
    return a + b;
}

exports.suma = suma;

const Persona = {
    nombre: "Juanito",
}

function getNombre() {
    return Persona.nombre;
}

exports.getNombre = getNombre;