"use-strict";
const userObjects = require("../Models/users");

const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY || '2012020';
const salt = bcrypt.genSaltSync(10);

exports.registerUsers = async (req, res) => {
    const password_salt = bcrypt.hashSync(req.body.password, salt);
    const {
        username,
        email,
        phone,
        password,
    } = req.body;

    //check phone existing
    try {
        let checkPhone = await userObjects.findOne({
            where: {
                phone
            }
        });
        
        if(checkPhone === null) {
            let newUsers = await userObjects.create({
                username,
                email,
                password,
                password_salt,
                phone,
            })
            if (newUsers) {
                const userInserted = await userObjects.findOne({
                    where: {
                        email
                    }
                });
                const token = jwt.sign({
                    password_salt:password,
                }, secretKey, {
                    expiresIn: '10h'
                });

                return res.json({
                    status: 'success',
                    message: 'User is created successfully',
                    data: userInserted,
                    token: token
                })
            } else {
                return res.json({
                    status: 'error',
                    message: 'Failed Insert New Users'
                });
            }
        } else {
            return res.json({
                status: 'error',
                message: 'Phone number already registered'
            });
        }
    } catch (error){
        res.status(500).json({
            status: 'error',
            message: 'Something goes wrong',
            data: {
                error
            }
        })
    }

}
