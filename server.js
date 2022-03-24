//import {getAllProducts,getRandomProduct} from "./controllers/index.js";
const {getAllProducts,getRandomProduct} = require('./controllers/index.js');
const express = require('express');

const app = express();

const server = app.listen(8080,()=>console.log(`server up on port ${server.address().port}`));

server.on("error", err => console.error(err));

app.get("/productos",async(req,res)=>{
    res.send(await getAllProducts());
})

app.get('/productoRandom',async(req,res)=>{
    res.send(await getRandomProduct());
})



