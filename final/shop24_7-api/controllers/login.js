let User=require('../models/user');
let jwt = require('jsonwebtoken');
let config = require('../config');

module.exports=async function(req, res) {

   try{
      const {body} = req;
      const {email, password} = body;
      console.log({"email":email, "password": password});
      if(!!email && !!password && email != "" && password != ""){

        const userObj = await User.findOne({"email":email, "password": password});
        
        if(!userObj){
          res.status(401).json({message:"User not found"});
          return;
        }
        const token = jwt.sign({id:userObj._id}, config.secret,{expiresIn: 36000});
        res.status(200).json({
           status:"success",
           message: "User logged in  successfully", 
           accessToken: token
         });
      }else{
        res.status(400).json({success:false,message:"Unsuccessfully logged in."});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({success:false,message:"Unsuccessfully logged in."});
    }
    
    
  }