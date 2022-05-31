const mongoose = require('mongoose');
const Cart = require('./cart');

const order_schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    "address":{
        "streetAddress":String,
        "city":String,
        "state":String,
        "zipCode":String
    },
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}
});

module.exports = mongoose.model("Order", order_schema);