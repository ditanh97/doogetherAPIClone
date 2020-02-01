"use-strict";
const express = require("express");
const Route = express.Router();
const userRouter = require('./users');

Route.get('/', (req, res) => {
    res.json({
        message: "Doogether API Clone",
    });
});

Route.use('/user', userRouter);

module.exports = Route;