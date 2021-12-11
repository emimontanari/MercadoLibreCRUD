const readFile = require('../helpers/operators');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products: readFile.getAllProducts()});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		//TODO: leer id y pasar un producto
		const product = readFile.getProductById(parseInt(req.params.id));
		console.log(typeof req.params.id, req.params.id);
		res.render('detail', { product })
	},

	// Create - Form to create
	create: (req, res) => {
		//TODO: mostrar la página del formulario
		
		res.render('product-create-form');
		
	},
	
	// Create -  Method to store
	store: (req, res) => {
		//TODO: sobre escribir el json con el nuevo producto y luego redireccionar a otro página
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		//TODO: Mostrar el formulario de editar, enviar la información del producto a editar: (quizá con id)
		res.send('product-edit-form', {producto:{}})

	},
	// Update - Method to update
	update: (req, res) => {
		//TODO: trae un id, filtra y encuentra el producto que tiene ese id y sobre escribe ese producto, luego sobreescribe el json
		res.send(true);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		//TODO: me traigo un id que corresponde al producto a eliminar, copio el array de productos, hago un splice y luego sobreescribo el json
	}
};

module.exports = controller;