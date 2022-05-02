var models = require("../models");
var express = require("express");
var router = express.Router();

router.post("/create", function (req, res) {
  console.log("req", req.body);
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  })
    .then(function () {
      console.log("sended");
    })
    .cath((error) => {
      console.log("error");
    });
});

module.exports = router;
