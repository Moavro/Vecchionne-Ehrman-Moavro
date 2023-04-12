var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);
router.get('/search-result', indexController.searchResult);
router.get('/headerLogueado', indexController.headerLogueado);





module.exports = router;
