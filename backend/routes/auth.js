var models = require("../models");
const bcrypt = require("bcrypt");
var express = require("express");
const jwt = require("jsonwebtoken");
const yup = require("yup");
const { jwtOptions } = require("../config/jwtOptions");
var router = express.Router();

// const signupSchema = yup.object({
//   body: yup.object({
//     firstName: yup.string().min(3).max(10).required(),
//     lastName: yup.string().min(3).max(10).required(),
//     email: yup.string().email().min(5).max(30).required(),
//     password: yup.string().min(8).max(16).required(),
//   }),
// });

// const validate = (schema) => async (req, res, next) => {
//   try {
//     await schema.validate({
//       body: req.body,
//     });
//     return next();
//   } catch (err) {
//     return res.status(500).json({ type: err.name, message: err.message });
//   }
// };

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
      // let refreshToken = await RefreshToken.crea
      return res.status(200).json({ message: "ok", token });
    } else {
      return res.status(403).json({ message: "incorrect password" });
    }
  });
});

router.post("/refreshtoken", async function (req, res) {
  console.log("req", req.body);
});

module.exports = router;
