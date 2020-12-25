const mongoose = require('mongoose');

const CovidSchema = mongoose.Schema({
    cidade: String,
    casos_acumulados: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Casos', CovidSchema);