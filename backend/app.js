var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = 3000;
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');

var app = express();

async function init() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/david-stalgren')
        .then(console.log('Connected to database'));
    } catch (error) {
        console.log(error);
    }
/*     app.listen(PORT, () => console.log(`Server is up and running on port: ${PORT}`)) */
}

init()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;
