"use-strict";
const Sequelize = require("sequelize");
const sequelize = require('../Config/database');

const Classes = sequelize.define("classes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING
    },
    sport_id: {
        type: Sequelize.INTEGER
    },
    image: {
        type: Sequelize.STRING
    },
    about: {
        type: Sequelize.STRING
    },
    note: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    },
    venue_id: {
        type: Sequelize.INTEGER
    },
    capacity: {
        type: Sequelize.INTEGER
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

module.exports = Classes;