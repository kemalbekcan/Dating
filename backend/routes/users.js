var models = require("../models");
var express = require("express");
var router = express.Router();

router.post("/create", function (req, res) {
  models.User.create({
    username: req.body.username,
  }).then(function () {
    res.redirect("/");
  });
});

module.exports = router;
