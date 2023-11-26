'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController');
const foodController = require('../controllers/foodController');

router.get('/', controller.showHomepage);
router.get('/:id', foodController.getData, foodController.showDetails);

module.exports = router;