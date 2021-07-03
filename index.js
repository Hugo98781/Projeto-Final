const mongoose = require('mongoose')
const uri = "mongodb+srv://hugo:c7HDLPPfSnxZNStF@cluster0.2l9cn.mongodb.net/ProjetoFinal?retryWrites=true&w=majority"
const opcoes = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, opcoes)

mongoose.connection.on('connected', function(){
    console.log("Conexão realizada com sucesso!")
})

module.exports = mongoose