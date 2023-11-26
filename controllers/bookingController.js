'use strict';

let controller = {};
const models=require('../models');
const sequelize = require('sequelize');
const {Op} = require('sequelize');

controller.submitBooking = async (req, res) => {
    // Lưu booking vào bảng Bookings trong CSDL
      const booking = await models.Booking.create({
        name: req.body.name,
        date:req.body.date,
        email: req.body.email,
        time: req.body.time,
        phone: req.body.phone,
        people:req.body.people,
        message: req.body.message,
      });
      //res.render('error', {message: 'You booking has been sent!'});
      //return res.redirect(`/${originalUrl}`);
      return res.send('<script>window.history.back();</script>');
  };

module.exports = controller;

  
    