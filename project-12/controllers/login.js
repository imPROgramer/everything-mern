const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const config = require('../config');
const User = require('../models/user');

module.exports = async function(req, res){
    try{
        const {body} = req;
        const {username, password} =body;
        console.log(username,password);
        if(!username || !password){
            res.status(500).json({status: "Missing Paramenters"});
        }
        const userDoc = await User.findOne({"username":username, "password":password});

        if(!userDoc){
            res.status(401).json({status: "User not find"});
        }
        const token = jwt.sign({id:userDoc._id}, config.secret,{expiresIn: 36000});

        res.status(200).json({
            "userid":userDoc._id,
            "token": token
        });
    }catch(err){
        res.status(500).json({status: "Login failed"});
    }
};