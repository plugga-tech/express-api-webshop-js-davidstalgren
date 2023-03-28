var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');

var app = express();

// Bra med try/catch och användning av Mongoose!
async function init() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/david-stalgren')
        .then(console.log('Connected to database'));
    } catch (error) {
        console.log(error);
    }
}

init()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// Jag gjorde en variabel av "api", kanske kan vara bra ifall saker ändras
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
