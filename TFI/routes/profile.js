var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController')
/* GET home page. */
router.get('/', profileController.show);
router.get("/register", profileController.register);
router.get("/profile-edit", profileController.profileEdit)
router.get("/login", profileController.login)



module.exports = router