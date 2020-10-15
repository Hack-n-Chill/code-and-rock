var express = require("express");
var routes = express.Router();
const student = require("../controllers/jucontroller");
routes.get("/", student.index);
routes.post("/show", student.show);
routes.post("/store", student.store);
routes.post("/update", student.update);

module.exports = routes;