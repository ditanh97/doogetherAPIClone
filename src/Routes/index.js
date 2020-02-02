"use-strict";
const express = require("express");
const Route = express.Router();
const user = require('./users');
const booking = require('./books');
const class_route = require('./classes');

Route.get('/', (req, res) => {
    res.json({
        message: "Doogether API Clone",
    });
});

Route.use('/user', user);
Route.use('/book', booking);
Route.use('/class', class_route);

module.exports = Route;