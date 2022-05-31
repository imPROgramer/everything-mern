const jwt = require("jsonwebtoken");
const config = require("../config");

let checkToken = (req, res, next) =>{

    try{
        const {headers} = req;
        const {authorization} = headers;
        console.log(authorization, req.header);
        if(!authorization){
           return res.status(401).json({message: "Authentication error. Missiing Headers"});
        }
        const payload = jwt.verify(authorization, config.secret);
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({message: "Authentication error."});
    }
};

module.exports = {
    checkToken:checkToken
};