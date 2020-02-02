"use-strict"
const Router = require('express');
const router = Router();
const userController = require("../Controllers/users.controller");
const verify = require('../Middleware/verifyToken');

router
    .get("/", verify, userController.getAllUsers)
    .post("/register", userController.registerUser)
    .post("/login", userController.loginUser)

module.exports = router;

