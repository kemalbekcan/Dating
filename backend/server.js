const express = require("express");
const app = express();
const passport = require("passport");
const strategy = require("./config/jwtOptions");
const dotenv = require("dotenv");
var cors = require("cors");
const bodyParser = require("body-parser");
const checkAuth = require("./middleware/checkAuth");

var auth = require("./routes/auth");
var user = require("./routes/user");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// use the strategy
passport.use("strategy", strategy);

app.use("/", auth);

app.use("/", checkAuth, user);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
