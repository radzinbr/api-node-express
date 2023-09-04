//const express = require('express');
import express from 'express'
import bodyParser from 'body-parser'

import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import authRouter from './routes/authRouter.js'
import { PORT } from './config.js'
const api = express();

api.use(bodyParser.json())


api.get('/',(req,res) => {
    res.json({message:"bem vindo a API"})
})

api.use('/auth',authRouter)
api.use('/products',productRouter);
api.use('/user',userRouter);
//inicializa o servidor na porta 3000
api.listen(PORT, () => {
    console.log(`servidor falhou.... kkk zuera ta rodando kkkkk http://localhost:${PORT}`)
}) 