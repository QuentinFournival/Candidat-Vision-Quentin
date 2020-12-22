var express = require("express");

var router = express.Router();

// Displays home page
router.get("/", function (req, res, next) {
  res.render("home", {
    serviceId: req.body.serviceId,
    serviceName: req.body.serviceName,
  })
});

module.exports = router;
