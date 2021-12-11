const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = fs.readFileSync(productsFilePath, 'utf-8');
let productsJson = JSON.parse(products);

const readFile = {

    getAllProducts: function() {
        return productsJson;
    },
    getProductsVisited: function() {
        return productsJson.filter( el => el.category === 'visited');
    },
    getProductsInSale: function() {
        return productsJson.filter( el => el.category === 'in-sale');
    },
    getProductById: function(id) {
        //me traigo el producto con find
        if (condition) {
            return "un producto";
        } else {
            return null;
        }
        //TODO: devolver un null o un false si no encontro el producto;
    }

};

module.exports = readFile;





