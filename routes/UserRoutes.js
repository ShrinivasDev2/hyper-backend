const express = require("express");
const { userSignUp, userLogin } = require("../controllers/UserController");
const Router = express.Router();

Router.post("/signup", userSignUp);
Router.post("/login", userLogin);

module.exports = Router;
