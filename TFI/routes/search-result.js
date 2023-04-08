var express = require('express');
var router = express.Router();
const searchResultController= require('../controllers/search-resultController')
/* GET home page. */
router.get('/', searchResultController.prueba);

module.exports = router