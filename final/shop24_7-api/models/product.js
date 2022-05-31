const mongoose= require("mongoose");

const product_schema = new mongoose.Schema({
    name:String,    
    cost:Number,
    catergory: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    discount_price:Number,
    productImage: String,
    description: String,
    isTopSelling:Boolean,
    createdOn:Date,
    updatedOn:Date
})

module.exports = mongoose.model('Product', product_schema);