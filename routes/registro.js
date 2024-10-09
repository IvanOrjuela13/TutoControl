const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, deviceID, timestamp, location } = req.body;

    try {
        const nuevoRegistro = new Registro({ userId, deviceID, timestamp, location, type: 'entrada' });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Entrada registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la entrada' });
    }
});

// Ruta para registrar salida
router.post('/salida', async (req, res) => {
    const { userId, deviceID, timestamp, location } = req.body;

    try {
        const nuevoRegistro = new Registro({ userId, deviceID, timestamp, location, type: 'salida' });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Salida registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la salida' });
    }
});

module.exports = router;




