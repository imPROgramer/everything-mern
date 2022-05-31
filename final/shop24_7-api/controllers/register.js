const User = require('../models/user');

module.exports = async (req, res)=>{

    try{
        const { body } = req;
        const { firstName, lastName} = body;
        const { email} = body;
        const { password, confirmPassword} = body;
        if(password != confirmPassword){
            res.status(400).json({message: "Registration failed, password didn't match"});
        } 
        console.log({firstName,lastName,password,confirmPassword,email});

        const userObj = new User({firstName,lastName,email,password});
        const data = await userObj.save();

        res.status(200).json({
            status:"success",
            message:"User created successful"
        });
        
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Registration failed"});
    }
}