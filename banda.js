const mongoose = require('../data/index.js')

let oficinaSchema = new mongoose.Schema({

    _id: Number,
    genero: String,
    integrantes: Array,
    plataforma: String,
    fundacao: Number
    
})

let banda = mongoose.model('Banda', oficinaSchema)
module.exports = banda