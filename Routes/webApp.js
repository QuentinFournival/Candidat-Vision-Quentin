var express = require("express");
var cors = require("cors");
var webApp = require("../Controllers/webAppController");
var router = express.Router();



// Displays the service purposes' configuration page
router.get("/purposes", webApp.displayPurposes);
router.get("/getAll", webApp.getAll);

module.exports = router;
