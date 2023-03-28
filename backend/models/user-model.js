const mongoose = require('mongoose');

//Bra! Går det lägga in reg-ex eller annan validering med mongoose så vi endast får email t.ex
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', UserSchema);