var express = require('express');
var router = express.Router();
const profileEditController= require('../controllers/profile-editController')
/* GET home page. */
router.get('/', profileEditController.prueba);

module.exports = router