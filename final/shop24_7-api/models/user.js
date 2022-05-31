const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: {type: String,
            unique: true,
            required: true},
    phone: String,
    isAdmin:Boolean,
    interests: String,
    profileImage:String,
    address:{
        "streetAddress":String,
        "city":String,
        "state":String,
        "zipCode":String
    },
    createdOn:Date,
    updatedOn:Date
});

module.exports = mongoose.model('User',user_schema);