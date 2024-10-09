const mongoose = require('mongoose');

const RegistroSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tipo: {
        type: String,
        enum: ['entrada', 'salida'],
        required: true,
    },
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Registro', RegistroSchema);

