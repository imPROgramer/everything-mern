const mongoose = require('mongoose');

const category_schema = new mongoose.Schema({
    name:String
});

module.exports = mongoose.model('Category', category_schema);