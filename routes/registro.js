const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();
const moment = require('moment-timezone'); // Importar moment-timezone

// Función para obtener la fecha y hora local ajustada con la zona horaria
function obtenerFechaLocal() {
    // Reemplaza 'America/Bogota' por la zona horaria que necesites
    return moment().tz('America/Bogota').toDate(); 
}

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body;

    try {
        const nuevoRegistro = new Registro({
            userId,
            deviceID,
            ubicacion,
            fecha: obtenerFechaLocal(), // Usar la fecha ajustada con la zona horaria correcta
            tipo: 'entrada'
        });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Entrada registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la entrada' });
    }
});

// Ruta para registrar salida
router.post('/salida', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body;

    try {
        const nuevoRegistro = new Registro({
            userId,
            deviceID,
            ubicacion,
            fecha: obtenerFechaLocal(), // Usar la fecha ajustada con la zona horaria correcta
            tipo: 'salida'
        });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Salida registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la salida' });
    }
});

module.exports = router;
