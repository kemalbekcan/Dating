var models = require("../models");
const bcrypt = require("bcrypt");
var express = require("express");
var router = express.Router();

router.post("/create", function (req, res) {
  console.log("req", req.body);
  if (!req.body.email) {
    res.status(400).send({
      msg: "Please enter email.",
    });
  }
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

module.exports = router;
