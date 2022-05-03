var models = require("../models");
const bcrypt = require("bcrypt");
var express = require("express");
const jwt = require("jsonwebtoken");
const { jwtOptions } = require("../config/jwtOptions");
var router = express.Router();

router.post("/create", function (req, res) {
  if (!req.body.email) {
    res.status(400).send({
      msg: "Please enter email.",
    });
  }
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => res.status(201).send(user))
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

router.post("/login", async function (req, res, next) {
  const user = await models.User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.status(401).json({ message: "No such user found" });
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err) {
      res.status(403).json({ message: "incorrect password" });
    }
    if (result) {
      let payload = { user };
      console.log(jwtOptions.secretOrKey);
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.status(200).json({ message: "ok", token });
    } else {
      return res.status(403).json({ message: "incorrect password" });
    }
  });
});


module.exports = router;
