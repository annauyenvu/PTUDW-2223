'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookingController');

router.post("/", controller.submitBooking);

module.exports = router;