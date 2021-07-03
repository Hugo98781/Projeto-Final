const express = require('express')
const route = express.Router()
const banda = require('../models/banda')

route.get('/', async (requisicao, resposta) => {

    try {

        let bandas = []
        bandas = await banda.find()
        resposta.json(bandas)
        
    } catch (error) {

        console.error(error.messager)
        resposta.status(500).json({error: "Erro ao localizar banda"})
    }
})

route.post('/', async (requisicao, resposta) =>{

    try {

        const curso = new banda(requisicao.body)
        const resultado = await curso.save()
        resposta.json(resultado)
        
    } catch (error) {

        console.error(error.messager)
        resposta.status(500).json({error: "Erro ao salvar banda"})
    }
})

route.put('/:id', async (requisicao, resposta) => {

    try {

        const id = requisicao.params.id
        const corpo = requisicao.body
        const resultado = await banda.findByIdAndUpdate(id, corpo)
        resposta.json(resultado)
        
    } catch (error) {
        
        console.error(error.messager)
        resposta.status(500).json({error: "Erro ao modificar banda"})
    }
})

route.delete('/:id', async (requisicao, resposta) => {

    try {
        
        const id = requisicao.params.id
        const resultado = await banda.findByIdAndDelete(id)
        resposta.json(resultado)

    } catch (error) {
        
        console.error(error.messager)
        resposta.status(500).json({error: "Erro ao deletar banda"})
    }
})

module.exports = route