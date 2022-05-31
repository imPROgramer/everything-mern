const Product =require('../models/product');

const save = async(req,res) => {
    try{

        const { body } = req;
        const { name, cost, category, discount_price, 
                product_image,
                description, isTopSelling} = body;
        const product = new Product({name, cost, category,discount_price, product_image,description,isTopSelling});
        const data = await product.save();
        res.status(200).json({message:"Product Saved", data});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product save failed"});
    }
};

const getAll =  async(req,res) => {
    try{

        const products = await Product.find();
        res.status(200).json({
            "status":"success",
            products});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product fetch failed"});
    }
};

const deleteProduct = async(req,res) => {
    try{

        const id =  req.params.id;
        const data = await Product.remove({"_id":id});
        res.status(400).json({
            status: "success",
            message: "product deleted successfully"
        });

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product deleted failed"});
    }
}

const getProduct = async(req,res) => {
    try{

        const id =  req.params.PRODUCT_ID;
        console.log(id,{id});
        // const product = await Product.findOne({"_id":id});
        const product = await Product.findById(id);
        res.status(200).json({
                    status: "success", 
                    product});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product search failed"});
    }
}

const banner = async(req,res) => {
    try{
        const products = await Product.find();
        res.status(400).json({
            "status":"success",
            products
        });
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product deleted failed"});
    }
}

const homepage = async(req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json({
            "status":"success",
            products: products.splice(0,8)
        });
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Product deleted failed"});
    }
}
const updateProduct = async (req,res) => {
    try{
        const { body } = req;
        const { name, cost, category, discount_price, 
            product_image,
            description, isTopSelling} = body;
        const product = new Product({name, cost, category,discount_price, product_image,description,isTopSelling});
        res.status(200).json({
            status:"success",
            message:"product edited successfully"
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status: "fail"
        });
    }
}
module.exports = {
    save:save,
    getAll:getAll,
    deleteProduct:deleteProduct,
    homepage:homepage,
    getProduct:getProduct,
    updateProduct:updateProduct,
    banner:banner
}