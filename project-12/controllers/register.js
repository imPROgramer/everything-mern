const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const User = require("../models/user");

module.exports = async function (req, res) {
    try{
        const {body} = req;
        const {username, password, email} =body;
        console.log( body, username, password, email);
        if(!username || !password || !email){
            return res.status(500).json({status: "Parameter not present"});
        }
        let user = new User({"username":username, "password":password, "email":email});
        const response = await user.save();
        res.status(200).json({status: "User created succesfully"});
    }catch(err){
        res.status(500).json({status: "User creation failed"});
    }
}