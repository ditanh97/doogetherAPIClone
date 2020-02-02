"use-strict";
const Sequelize = require("sequelize");
const sequelize = require('../Config/database');

const Books = sequelize.define("booking", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    booking_uuid: {
        type: Sequelize.STRING
    },
    total_price: {
        type: Sequelize.INTEGER
    },
    promo_id: {
        type: Sequelize.INTEGER
    },
    paymethod_id: {
        type: Sequelize.INTEGER
    },
    status_id: {
        type: Sequelize.INTEGER
    },
    class_id: {
        type: Sequelize.INTEGER
    },
    pay_user_id: {
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

module.exports = Books;