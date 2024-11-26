const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo:', err);
            return;
        }

        const citas = JSON.parse(data);
        citas.push(nuevaCita);

        // Guardar la nueva cita en el archivo
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error guardando la cita:', err);
                return;
            }
            console.log('Cita registrada exitosamente:', nuevaCita);
        });
    });
};

const leer = () => {
    // Leer el archivo citas.json
    fs.readFile('citas.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Error leyendo el archivo:', err);
            return;
        }

        const citas = JSON.parse(data);
        console.log('Citas registradas:');
        console.log(citas);
    });
};

module.exports = { registrar, leer };
