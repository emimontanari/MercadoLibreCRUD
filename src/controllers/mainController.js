const readFile = require('../helpers/operators'); //extrae los productos json

//TODO: Consultar por esta expresion regular REGEX
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {

		const bodyProducts = {
			visited: readFile.getProductsVisited(),
			inSale: readFile.getProductsInSale()
		}

		res.render('index', {bodyProducts});
	},
	search: (req, res) => {
		res.render('results')
	},
};

module.exports = controller;
