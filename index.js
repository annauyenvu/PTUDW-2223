'use strict';

const express = require("express");
const app = express();
const port = 5000;
const sequelize = require('sequelize');
const handlebars = require('express-handlebars');

app.use(express.static(__dirname+"/public"));

// let models = require('./models');
// models.sequelize.sync().then(() => {
//     console.log('table created!');
// })

app.engine('hbs', handlebars.engine({
    extname: 'hbs', 
    defaultLayout: "layout", 
    partialsDir: __dirname+"/views/partials",
    layoutsDir: __dirname+"/views/layouts", 
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    },
    helpers: {
        isEven: function(index) {
            return index % 2 === 0;
        },
    }
}))
app.set("view engine", "hbs");
//cau hinh doc dl post tu req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));

app.use("/", require('./routes/indexRoute'));
app.use("/booking", require('./routes/bookingRoute'));

app.use((req, res, next) => {
    res.status(404).render('error', {message: 'File not Found'});
});
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).render('error', {message: 'Internal Server Error'});
});

//Khoi dong web server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

