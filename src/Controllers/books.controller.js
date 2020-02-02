"use-strict";
const Books = require('../Models/books');
exports.getBooks = async (req, res) => {
    const {id} = req.params;
    try {
      const booking = await Books.findAll(
        {
        where: {
            pay_user_id:id
          }

      }
      );
      res.json({
        status:'success',
        data: booking
      });
    } catch (error) {
      res.status(500).json({
        status:'error',
        message: 'Something goes wrong',
        data: {error}
      });
    }
  }