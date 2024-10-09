const express = require('express');
const Registro = require('../models/registro'); // Asegúrate de que este modelo existe
const router = express.Router();

// Ruta para registrar entrada
router.post('/entrada', async (req, res) => {
    const { userId, ubicacion } = req.body; // Recibir ID de usuario y ubicación

    // Generar timestamp con la fecha y hora actual
    const timestamp = new Date(); 

    try {
        const nuevoRegistro = new Registro({ 
            userId, 
            tipo: 'entrada', 
            ubicacion, 
            fecha: timestamp // Se almacena la fecha actual
        });
        await nuevoRegistro.save(); // Guardar el registro en la base de datos
        res.status(201).json({ msg: 'Entrada registrada exitosamente' }); // Respuesta exitosa
    } catch (error) {
        console.error('Error al registrar entrada:', error); // Mensaje de error en la consola del servidor
        res.status(500).json({ msg: 'Error al registrar la entrada' }); // Respuesta de error
    }
});

// Ruta para registrar salida
router.post('/salida', async (req, res) => {
    const { userId, ubicacion } = req.body; // Recibir ID de usuario y ubicación

    // Generar timestamp con la fecha y hora actual
    const timestamp = new Date(); 

    try {
        const nuevoRegistro = new Registro({ 
            userId, 
            tipo: 'salida', 
            ubicacion, 
            fecha: timestamp // Se almacena la fecha actual
        });
        await nuevoRegistro.save(); // Guardar el registro en la base de datos
        res.status(201).json({ msg: 'Salida registrada exitosamente' }); // Respuesta exitosa
    } catch (error) {
        console.error('Error al registrar salida:', error); // Mensaje de error en la consola del servidor
        res.status(500).json({ msg: 'Error al registrar la salida' }); // Respuesta de error
    }
});

module.exports = router; // Exportar el router
