const express = require('express')
const Product = require('../models/Product')

const {renderProduct, createProduct, renderProductEdit, editProduct, deleteProduct} = require('../controllers/product.controller')


const router = express.Router()




router.get('/products', renderProduct);

router.post('/products/add', createProduct);


router.get('/products/:id/edit', renderProductEdit);


router.post('/products/:id/edit', editProduct)


router.get('/products/:id/delete', deleteProduct)


// router.get('/point/:id/toggleDone', taskToggleDone )

module.exports = router;