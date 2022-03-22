const express = require('express');

const app = express();

const server = app.listen(8080,()=>console.log(`server up on port ${server.address().port}`))

app.get("/",(req,res)=>{
    res.send("hola!!")
})

app.get('/test',(req,res)=>{
    
})