const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Función para obtener la fecha y hora local ajustada
function obtenerFechaLocal() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000; // Obtener el desfase en milisegundos
    const localDate = new Date(now.getTime() - offsetMs); // Ajustar a la hora local
    return localDate;
}

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body;

    try {
        const nuevoRegistro = new Registro({
            userId,
            deviceID,
            ubicacion,
            fecha: obtenerFechaLocal(), // Usar la fecha ajustada
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
            fecha: obtenerFechaLocal(), // Usar la fecha ajustada
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
