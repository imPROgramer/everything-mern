const mongoose = require("mongoose");
const product = require("../models/product");
const bodyParser = require("body-parser");
const ObjectId = mongoose.Types.ObjectId;

module.exports = async function(req, res) {
    try{
      const doc = await product.find();
      if(!doc){
        res.status(200).json([]);
      }
      res.status(200).json(doc);
    }catch(err){
        res.status(500).json({status: "Server issue."});
    }

}