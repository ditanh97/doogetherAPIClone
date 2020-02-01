"use-strict"
const Router = require('express');
const router = Router();
const userController = require("../Controllers/users.controller");


router
    .post("/register", userController.registerUsers);

module.exports = router;

