const Contenedor = require('../Contenedor.js');

//Creo una instancia de Contenedor
const productos = new Contenedor('productos.txt');

const getAllProducts = async() => {
    try {
        return await productos.getAll();

    } catch (error) {
        console.error(error);
    }
}

const getRandomProduct = async() =>{
    try {
        return await productos.getRandom();

    } catch (error) {
        console.error(error);
    }
}

module.exports={getAllProducts,getRandomProduct};