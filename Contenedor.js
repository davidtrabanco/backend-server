const exp = require("constants");
const fs = require("fs");
const path = require('path')
const random = require('random');

class Contenedor{
    constructor(fileName){
        this.path=fileName;
    }
    
    async readFile(){
        try {
            //leo archivo actual y Lo convierto en Array:
            let productos = await fs.promises.readFile(this.path,'utf-8');
            productos = JSON.parse(productos);
            return productos;

        } catch (error) {
            console.error(error);
        }
    };

    async save(object){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Busco el ultimo Id
            let lastId=0
            const countItems = productos.length

            if(countItems!==0){
                //ya existen productos:
                lastId = productos[countItems-1].id
            }

            //Agrego el producto al array:
            object['id'] = lastId + 1;
            productos.push(object);

            //Guardo el Array en el archivo:
            productos = JSON.stringify(productos);
            await fs.promises.writeFile(this.path , productos)
        
            return object['id'];

        } catch (error) {
            console.error(error);
        } 
    }

    async getById(id){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Busco por Id en el array 
            let productFound = productos.find(item=> item.id===id)

            if(productFound===undefined){return null};

            return productFound;

        } catch (error) {
            console.error(error);
        }
    }

    async getAll(){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();
            return productos;

        } catch (error) {
            console.error(error);
        }
    }

    async deleteById(id){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            //Filtro el array eliminado el item con el id otorgado:
            let productsFiltered = productos.filter(item=> item.id!==id)

            //Guardo el Array en el archivo:
            productsFiltered = JSON.stringify(productsFiltered);
            await fs.promises.writeFile(this.path , productsFiltered);

        } catch (error) {
            console.error(error);
        }
    }

    async deleteAll(){
        try {
            //guardo en el archivo un string con un array vacío
            await fs.promises.writeFile(this.path , '[]');

        } catch (error) {
            console.error(error);
        }
    }

    async getRandom(){
        try {
            //Obtengo los productos desde el archivo:
            let productos = await this.readFile();

            const idRandom = random.int(0, productos.length-1);
            
            return productos[idRandom];

        } catch (error) {
            console.error(error);
        }
    }
}



module.exports=Contenedor;