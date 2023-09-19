var express = require("express");
var router = express.Router();
const { checkAdminPassword } = require("../modules/checkPasswords");
const { checkModeratorPassword } = require("../modules/checkPasswords");

router.get("/home", (req, res) => {
  res.json({ message: "Welcome to /home" });
});

router.get("/about", (req, res) => {
  res.json({ message: "Welcome to /about" });
});

module.exports = router;
