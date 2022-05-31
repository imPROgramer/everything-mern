var mongoose=require('mongoose');

const connectMongoose = ()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/shop24x7', {useNewUrlParser: true},(err) => {
        if(!err){
            console.log("connected");
        }else{
            console.log("connection failed: "+err);
        }
    });
}

module.exports = {
    connectMongoose: connectMongoose
}