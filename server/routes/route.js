var express = require("express");
var UserController = require('./controller')
var router = express.Router();

/* GET home page. */
router.get("/chat", UserController.getChat);

router.get("/chat:id", UserController.getChat);

module.exports = router;
