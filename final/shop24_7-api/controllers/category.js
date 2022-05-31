const Category = require('../models/category');
const Product = require('../models/product');

const save = async (req, res)=>{
    try {
        const { body } = req;
        const { categories } = body;
        categories.forEach(async (category) => {
            let response = await (new Category(category)).save();
        });
        res.status(200).json({message:"Categories saved"});
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Categories save failed"});
    }
}

const getAll = async (req, res)=>{
    try {
        const doc = await Category.find();

        res.status(200).json(doc || []);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Categories save failed"});
    }
}


const getOne = async (req, res)=>{
    try {
        const id =  req.params.catergory_id;
        let doc = await Product.find({"category":id});
        console.log(doc);
        doc = (doc.length != 0) ? doc: [{id:1234,productName:"P1"},{id:1212,productName:"P2"},
                      {id:1432,productName:"P3"},{id:1223,productName:"P4"},
                      {id:14332,productName:"P5"},{id:12523,productName:"P6"},
                      {id:144532,productName:"P7"},{id:12223,productName:"P8"}];
        res.status(200).json(doc);
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product not found"});
    }
};

const getAllThree = async(req,res) => {
    try {
        const doc = await Category.find();

        res.status(200).json({
            status:"success",
            categories: doc.splice(0,3)
        });
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Categories save failed"});
    }
}

module.exports ={
    save:save,
    getAll:getAll,
    getOne:getOne,
    getAllThree:getAllThree
}