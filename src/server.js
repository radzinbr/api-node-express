//const express = require('express');
import express from 'express'

const api = express();


api.get('/',(req,res) => {
    res.json({message:"bem vindo a API"})
})


api.post('/',(req,res) => {
    res.json({message:"metodo post"})
})

api.put('/',(req,res) => {
    res.json({message:"metodo put"})
})

api.delete('/',(req,res) => {
    res.json({message:"metodo delete"})
})

//inicializa o servidor na porta 3000
api.listen(3000, () => {
    console.log('servidor falhou.... kkk zuera porra ta rodando kkkkk https://localhost:3000/')
}) 