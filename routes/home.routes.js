const express = require("express");
const router = express.Router();
const homepage_controller = require("../controllers/home.controller");

router.get("/", homepage_controller.homepage);

module.exports = router;