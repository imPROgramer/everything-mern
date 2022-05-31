const jwt = require('jsonwebtoken');
const config = require('./config');

const checkToken =  (req, res, next) =>{
    try{
        const { headers } = req;
        const { authorization } = headers;

        if(!authorization){
            res.status(401).json({message: "Authorisation error!!"});
            return false;
        }
        const payload =  jwt.verify(authorization, config.secret);
        next();
    }catch(error){
        res.status(401).json({message: "Authorisation error!!"});
    }
}

module.exports = {checkToken:checkToken};