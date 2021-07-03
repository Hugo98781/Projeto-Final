const mongoose = require('../data/index.js')

let localSchema = new mongoose.Schema({

    _id: Number,
    album: String,
    musica: String,
    data: Number
})

let musica = mongoose.model('Musica', localSchema)
module.exports = musica