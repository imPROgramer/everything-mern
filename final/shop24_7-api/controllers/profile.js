const User = require('../models/user');
const path = require('path');
const fs = require('fs');
let jwt = require('jsonwebtoken');
let config = require('../config');
const { unlink } = require('fs/promises');

const getProfile = async (req, res)=>{

    try{
        const { body } = req;
        const{ email } = body;

        const profile = await User.findOne({"email":email});

        profile['password'] = undefined;
        delete profile['password'];

        res.status(200).json({
            status: "success",
            profile
        });
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:"Unsuccessfully logged in."});
    }
}

const profileImageDelete = async (req, res) => {
    
    try{

        const {headers} = req;
        const {authorization} =headers;
      
        const payload = jwt.verify(authorization,config.secret);

        const userObj = await User.findOne({"_id":payload.id});
        userObj.profileImage = "";

        await User.findOneAndUpdate({"_id" : payload.id }, userObj, {upsert: true});
    
        res.status(200).json({
            status: "success",
            message: "profile modified successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:"Deletion failed"});
    }
}


const profileImagePatch = async (req, res) => {
    
    try{

        const {headers} = req;
        const {authorization} =headers;
        const profileImage = req.body.profileImage;
      
        const payload = jwt.verify(authorization,config.secret);
        console.log({payload, profileImage});
        const userObj = await User.findOne({"_id":payload.id});
        userObj.profileImage = profileImage;

        await User.findOneAndUpdate({"_id" : payload.id }, userObj, {upsert: true});

        res.status(200).json({
            status: "success",
            message: "profile modified successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({success:false,message:"profile modification failed"});
    }
}

const profileAddress = async (req, res) => {
    
    try{
        const { body, headers } = req;

        const{ address } = body;
        const {authorization} =headers;

        const payload = jwt.verify(authorization,config.secret);

        let userObj = await User.findOne({"_id" : payload.id });
        // console.log({address, authorization, payload, userObj});
        userObj.address = address;
        // console.log({address, authorization, payload, userObj});
        // const profile = await User.updateOne(userObj);
        const profile = await User.findOneAndUpdate({"_id" : payload.id }, userObj, {upsert: true});

        res.status(200).json({
            status: "success",
            message:"profile modified successfully"
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "profile modification failed"
        });
    }
}

module.exports = {
    getProfile: getProfile,
    profileImageDelete: profileImageDelete,
    profileAddress:profileAddress,
    profileImagePatch:profileImagePatch
}