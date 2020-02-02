"use-strict"
const Router = require('express');
const router = Router();
const bookController = require("../Controllers/books.controller");
const verify = require('../Middleware/verifyToken');

router
    .get("/:id", verify, bookController.getBooks)


module.exports = router;
