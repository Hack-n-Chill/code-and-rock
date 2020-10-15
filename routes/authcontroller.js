var express = require("express");
var routes = express.Router();

const authcontroller = require("../controllers/Authcontroller");


routes.post("/register", authcontroller.register);

module.exports = routes;