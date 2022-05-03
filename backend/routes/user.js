var models = require("../models");
var express = require("express");
var router = express.Router();

router.get("/users", async function (req, res) {
  return await models.User.findAll().then((user) => {
    res.json(user);
  });
});

module.exports = router;
