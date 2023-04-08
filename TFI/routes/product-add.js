var express = require('express');
var router = express.Router();
const productAddController= require('../controllers/product-addController.js')
/* GET home page. */
router.get('/', productAddController.prueba);

module.exports = router