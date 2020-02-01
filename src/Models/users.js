"use-strict";
const Sequelize = require("sequelize");
const sequelize = require('../Config/database');

const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    password_salt: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    created: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

module.exports = Users;