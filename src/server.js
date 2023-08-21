//const express = require('express');
import express from 'express'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import authRouter from './routes/authRouter.js'
const api = express();


api.get('/',(req,res) => {
    res.json({message:"bem vindo a API"})
})

api.use('/auth',authRouter)
api.use('/products',productRouter);
api.use('/user',userRouter);
//inicializa o servidor na porta 3000
api.listen(3000, (req,res) => {
    console.log('servidor falhou.... kkk zuera porra ta rodando kkkkk http://localhost:3000/')
}) 