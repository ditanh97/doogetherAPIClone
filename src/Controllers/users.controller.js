"use-strict";
const userObjects = require("../Models/users");

const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY || '2012020';
const salt = bcrypt.genSaltSync(10);

exports.registerUser = async (req, res) => {
    const password = bcrypt.hashSync(req.body.password, salt);
    const {
        name,
        email,
        username,
        gender_id,
        dob,
        image,
        lat,
        ltg
    } = req.body;

    //check email existing
    try {
        let checkEmail = await userObjects.findOne({
            where: {
                email
            }
        });
        
        if(checkEmail === null) {
            let newUsers = await userObjects.create({
                name,
                email,
                username,
                password,
                gender_id,
                dob,
                image,
                lat,
                ltg,
            })
            if (newUsers) {
                const userInserted = await userObjects.findOne({
                    where: {
                        email
                    }
                });
                const token = jwt.sign({
                    password:password,
                    username:username,
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
                message: 'email number already registered'
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

exports.loginUser = async (req, res) => {
    const username = req.body.username
    const password = req.body.password
  
 
    try {
       const loginUser = await userObjects.findOne({
        where: {
          username
        }
      });
  
      // check hashed password
      console.log(loginUser, 'adada')
      const validPassword = bcrypt.compareSync(password, loginUser.dataValues.password)
  
      //Validation Data
      if (password === "" || password === null || password === undefined) {
        return res.json({
          status: "error",
          response: "Password can't be empty"
        });
      }
  
      //Validation Password Check
      if (!validPassword) {
        return res.json({
          status:'error',
          message: 'Wrong Password!'
        })
      } else {
        //GET DATA
        const userInserted = await userObjects.findOne({
          where: {
            username
          }
        });
  
        // Create and assign token
        const token = jwt.sign({
          password: password,
          username: username
        }, secretKey, {
          expiresIn: '10h'
        })
  
        res.json({
          status:'success',
          message: 'Succes Login',
          data: userInserted,
          token: token
        })
      }
    } catch (error) {
      res.status(500).json({
        status:'error',
        message: 'Something goes wrong',
        data: {
          error
        }
      })
    }
  };

  exports.getAllUsers = async (req, res) => {
    try {
      const users = await userObjects.findAll();
      res.json({
        status:'success',
        data: users
      })
    } catch (error) {
      res.status(500).json({
        status:'error',
        message: 'Something goes wrong',
        data: {error}
      })
    }
  }