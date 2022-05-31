const mongoose = require('mongoose');
const Product = require('./product');

const cart_schema = new mongoose.Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity: Number,
    email: String
});

module.exports = mongoose.model('Cart',cart_schema);