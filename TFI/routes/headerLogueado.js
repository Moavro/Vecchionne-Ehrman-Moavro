var express = require('express');
var router = express.Router();
const headerLogueadoController = require('../controllers/headerLogueadoController')

/* GET home page. */
router.get('/', headerLogueadoController.prueba);





module.exports = router;