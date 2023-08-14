//const express = require('express');
import express from 'express'
import userRouter from './routes/userRouter.js'
const api = express();


api.get('/',(req,res) => {
    res.json({message:"bem vindo a API"})
})

api.use('/users',userRouter)
//inicializa o servidor na porta 3000
api.listen(3000, () => {
    console.log('servidor falhou.... kkk zuera porra ta rodando kkkkk https://localhost:3000/')
}) 