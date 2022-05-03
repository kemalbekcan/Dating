var models = require("../models");
var express = require("express");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.get("/users", async function (req, res) {
  return await models.User.findAll().then((user) => {
    res.json(user);
  });
});

router.get("/user", function (req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, "secret");
  return res.json(decoded);
});

module.exports = router;
