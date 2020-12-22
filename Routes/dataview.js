var express = require("express");
var dataview = require("../Controllers/dataviewController");

var router = express.Router();

// Utilisez et créez des routes comme bon vous semble ici pour visualiser
// le contenu de la base de données et comprendre ce avec quoi vous travaillez

// Displays all service datatypes
router.route('/datatypes').get(dataview.allServiceDatatypes)
                          .put(dataview.addRemoveServiceDatatypes)

module.exports = router;