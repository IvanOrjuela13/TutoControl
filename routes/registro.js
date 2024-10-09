const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body; // Cambiar 'location' por 'ubicacion'

    // Verificar que se reciban los datos necesarios
    if (!userId || !deviceID || !ubicacion) {
        return res.status(400).json({ msg: 'Faltan datos requeridos' });
    }

    try {
        const nuevoRegistro = new Registro({
            userId,
            deviceID, // Almacena el deviceID
            tipo: 'entrada',
            ubicacion, // { lat: ..., lng: ... }  asegúrate de que esto sea un objeto
        });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Entrada registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la entrada', error });
    }
});

// Ruta para registrar salida
router.post('/salida', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body; // Cambiar 'location' por 'ubicacion'

    // Verificar que se reciban los datos necesarios
    if (!userId || !deviceID || !ubicacion) {
        return res.status(400).json({ msg: 'Faltan datos requeridos' });
    }

    try {
        const nuevoRegistro = new Registro({
            userId,
            deviceID, // Almacena el deviceID
            tipo: 'salida',
            ubicacion, // { lat: ..., lng: ... }  asegúrate de que esto sea un objeto
        });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Salida registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la salida', error });
    }
});

module.exports = router;
