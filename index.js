const { registrar, leer } = require('./operaciones.js');

const [operacion, ...args] = process.argv.slice(2);

if (operacion === 'registrar') {
    const [nombre, edad, tipo, color, enfermedad] = args;
    registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no válida. Usa "registrar" o "leer".');
}