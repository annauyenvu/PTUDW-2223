'use strict';

let controller = {};
const models=require('../models');
const sequelize = require('sequelize');
const {Op} = require('sequelize');

controller.showHomepage = async (req, res) => {
    let options = {
        attributes: ['id', 'name'],
        where: {},
        include: [{
            model: models.Food,
        }]
    }
    
    let menus = await models.Menu.findAll(options);
    let food = await models.Food.findAll({
        attributes: ['id', 'name', 'summary', 'price', 'menuId']
    })
    res.locals.menus = menus;
    res.locals.food = food;
    res.render('index');
}


module.exports = controller;