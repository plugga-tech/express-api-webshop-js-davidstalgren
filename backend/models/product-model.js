const mongoose = require('mongoose');

//Bra! Samma här, kanske bra med min-max price / lager för att förhindra felinput?
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    lager: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('product', ProductSchema);