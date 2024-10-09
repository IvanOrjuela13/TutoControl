const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, deviceID, ubicacion } = req.body;

    // Generar timestamp con la fecha y hora actual
    const timestamp = new Date(); 

    try {
        const nuevoRegistro = new Registro({ 
            userId, 
            tipo: 'entrada', 
            ubicacion, 
            fecha: timestamp // Se almacena la fecha actual
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

    // Generar timestamp con la fecha y hora actual
    const timestamp = new Date(); 

    try {
        const nuevoRegistro = new Registro({ 
            userId, 
            tipo: 'salida', 
            ubicacion, 
            fecha: timestamp // Se almacena la fecha actual
        });
        await nuevoRegistro.save();
        res.status(201).json({ msg: 'Salida registrada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la salida' });
    }
});

module.exports = router;

