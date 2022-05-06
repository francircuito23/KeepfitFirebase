const express = require('express');

const morgan = require('morgan');

const ruta = require('path')

//hbs
const exphbs = require('express-handlebars');

const app = express();

app.set('views', ruta.join(__dirname, 'views'))
app.engine('.hbs', exphbs.create({
    defaultLayout: 'dieta',
    extname: '.hbs',
}).engine)

app.set('view engine', '.hbs')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

//esto hace que la carpeta public sea accsesible desde el navegador
app.use(express.static(ruta.join(__dirname, 'public')));

module.exports = app;