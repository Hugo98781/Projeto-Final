const express = require('express')
const route = express.Router()
const musica = require('../models/musica')
const axios = require('axios').default

route.get('/', async (requisicao, resposta, next) => {

    try {


        var url = 'https://projeto-final-aline-redivo.herokuapp.com/album'
        let albuns = []
        albuns = await musica.find()
        const musicas = await axios.get(url)
        
        
        const vetor = musicas.data
        
        const resultado = vetor.map(function (musicas) {

            return {
                "Album": musicas.album,
                "Faixa": musicas.faixa,
                "NumeroFaixas": musicas.nrFaixa,
                "Data": musicas.data
            }
        })

        var a = 0
        var b = 0
        var c = 0

        for(c=0; c < albuns.length; c++){ 

            for(a = 0; a<resultado.length; a++){

                for(b = 0; b < resultado[a].Faixa.length; b++){

                    if(albuns[c].musica == resultado[a].Faixa[b]){
                        albuns.album = resultado[a].Album[b]
                    }
                }
            }
        }   

        resposta.json(albuns)

    } catch (err) {

        next(err)
    }

})

route.post('/', async (requisicao, resposta) =>{

    try {

        const musica = new musica(requisicao.body)
        const resultado = await musica.save()
        resposta.json(resultado)
        
    } catch (error) {

        console.error(error.messager)
        resposta.status(500).json({error: "C"})
    }
})

route.put('/:id', async (requisicao, resposta) => {

    try {

        const id = requisicao.params.id
        const corpo = requisicao.body
        const resultado = await musica.findByIdAndUpdate(id, corpo)
        resposta.json(resultado)
        
    } catch (error) {
        
        console.error(error.messager)
        resposta.status(500).json({error: "Erro em buscar endereço"})
    }
})

route.delete('/:id', async (requisicao, resposta) => {

    try {
        
        const id = requisicao.params.id
        const resultado = await musica.findByIdAndDelete(id)
        resposta.json(resultado)

    } catch (error) {
        
        console.error(error.messager)
        resposta.status(500).json({error: "Erro em buscar endereço"})
    }
})

module.exports = route