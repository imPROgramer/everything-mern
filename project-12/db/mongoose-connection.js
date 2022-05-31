var mongoose=require('mongoose');
const config = require('../config');

const connectDB = ()=>{
  mongoose.connect(config.dburl, {useNewUrlParser: true},(err) => {
    if(!err){
      console.log("mongodb connected");
    }else{
      console.log("mongodb connection failed: "+err);
    }
  });
}

module.exports = {connectDB};