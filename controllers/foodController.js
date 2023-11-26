'use strict';

let controller = {};
const models=require('../models');
const sequelize = require('sequelize');
const {Op} = require('sequelize');

controller.getData = async (req, res, next) => {
    let menus = await models.Menu.findAll({
        include: [{
            model: models.Food,
        }]
    });
    res.locals.menus = menus;
    next();
}

controller.showDetails = async (req, res) => {
    let menu = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
    let options = {
        attributes: ['id', 'name', 'summary', 'price', 'menuId'],
        where: {}
    };
    if(menu>0) {
        options.where.menuId=menu;
    }
   
    let food = await models.Food.findAll(options);
    res.locals.food = food;
    res.render('index');
}

module.exports = controller;