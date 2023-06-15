var express = require('express');
var router = express.Router();
const productController= require('../controllers/productController')
/* GET home page. */
router.get('/detail/:id', productController.show);

router.get("/product-add", productController.productAdd);
router.post("/product-add", productController.storeProduct)

router.get("/edit/:id", productController.edit);
router.post("/edit/:id", productController.storeEdit); 

router.post("/detail/:id", productController.storeComentario)

module.exports = router