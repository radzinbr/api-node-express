const express = require('express');

const API = express();


API.get('/',(req,res) => {
    res.json({message:"bem vindo a API"})
})

API.listen(3000, () => {
    console.log('servidor falhou.... kkk zuera porra ta rodando kkkkk')
})