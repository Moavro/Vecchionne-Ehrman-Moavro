var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController')
/* GET home page. */
router.get('/:id', productController.show);
router.get('/product-add', productController.productAdd);


module.exports = router