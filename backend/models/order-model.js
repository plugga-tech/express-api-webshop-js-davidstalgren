const mongoose = require('mongoose');

// Bra! 
const OrderSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    products: [
        {
            productId: {
                type: [mongoose.Types.ObjectId],
                ref: "product",
                required: true,
            },
            quantity: {
                type: Number,
                reqired: true
            }
        }   
    ]
});

module.exports = mongoose.model('order', OrderSchema);