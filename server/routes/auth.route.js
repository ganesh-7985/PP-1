const express = require("express");
const router = express.Router();
const { registerController , loginController , logoutController } = require("../controllers/auth.controller")

router.post('/api/register',registerController)
router.post('/api/login',loginController)
router.post('/api/logout',logoutController)

module.exports=router