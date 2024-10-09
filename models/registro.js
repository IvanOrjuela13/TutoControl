const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, ubicacion } = req.body; // Se recibe el ID del usuario y ubicación
    const timestamp = new Date(); // Generar timestamp con la fecha y hora actual

    try {
        const nuevoRegistro = new Registro({
            userId,
            tipo: 'entrada',
            ubicacion,
            fecha: timestamp, // Se almacena la fecha actual
        });
        await nuevoRegistro.save(); // Guardar el registro en la base de datos
        res.status(201).json({ msg: 'Entrada registrada exitosamente' }); // Respuesta exitosa
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la entrada' }); // Respuesta de error
    }
});

// Ruta para registrar salida
router.post('/salida', async (req, res) => {
    const { userId, ubicacion } = req.body; // Se recibe el ID del usuario y ubicación
    const timestamp = new Date(); // Generar timestamp con la fecha y hora actual

    try {
        const nuevoRegistro = new Registro({
            userId,
            tipo: 'salida',
            ubicacion,
            fecha: timestamp, // Se almacena la fecha actual
        });
        await nuevoRegistro.save(); // Guardar el registro en la base de datos
        res.status(201).json({ msg: 'Salida registrada exitosamente' }); // Respuesta exitosa
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al registrar la salida' }); // Respuesta de error
    }
});

module.exports = router; // Exportar el router para que pueda ser utilizado en otras partes de la aplicación
