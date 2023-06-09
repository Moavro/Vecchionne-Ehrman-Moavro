var express = require('express');
var router = express.Router();
const profileController= require('../controllers/profileController')
/* GET home page. */
router.get('/', profileController.show);

router.get("/register", profileController.register);
router.post("/register", profileController.store);

router.get("/login", profileController.login)
router.post("/login", profileController.storeLogin)

router.get("/profile-edit", profileController.profileEdit)

router.get("/logout", profileController.logout)



module.exports = router