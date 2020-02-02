"use-strict"
const Router = require('express');
const router = Router();
const classController = require("../Controllers/classes.controller");
const verify = require('../Middleware/verifyToken');

router
    .get("/", verify, classController.getClasses)


module.exports = router;
