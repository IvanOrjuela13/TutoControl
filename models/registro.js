const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    deviceID: { type: String, required: true }, // Para almacenar el Device ID
    tipo: { type: String, enum: ['entrada', 'salida'], required: true },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true }
    },
    fecha: { type: Date, default: Date.now } // Para almacenar la fecha y hora
});

const Registro = mongoose.model('Registro', registroSchema);

module.exports = Registro;
