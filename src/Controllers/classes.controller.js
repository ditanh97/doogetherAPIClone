"use-strict";
const Classes = require('../Models/classes');

exports.getClasses = async (req, res) => {
    try {
      const allClass = await Classes.findAll();
      res.json({
        status:'success',
        data: allClass
      });
    } catch (error) {
      res.status(500).json({
        status:'error',
        message: 'Something goes wrong',
        data: {error}
      });
    }
  }