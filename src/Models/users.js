"use-strict";
const Sequelize = require("sequelize");
const sequelize = require('../Config/database');

const Users = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    gender_id: {
        type: Sequelize.INTEGER
    },
    dob: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    lat: {
        type: Sequelize.DECIMAL
    },
    ltg: {
        type: Sequelize.DECIMAL
    },
    created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW 
    },
    updated:{
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW 
    }
}, {
    timestamps: false
});

module.exports = Users;