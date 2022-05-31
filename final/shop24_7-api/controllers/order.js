const Order = require('../models/order');

const save = async (req, res)=>{
    try{
        const {body} =req;
        const {user,address}=body;
        

        // const orderObj = new Order({first_name,last_name,email,street_address,city,state,zip_code});
        // const data = await orderObj.save();
        res.status(200).json({
            status:"success",
            message:"Order placed successful"
    });

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Order placement failed"});
    }
};

const getAllOrders = async (req,res)=>{
    try{

        const orders = Order.find();
        res.status(200).json(orders);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Get all order failed"});
    }
}

const getAllUserOrder = async (req,res)=>{
    try{
        const {body} =req;
        const {email}=body;

        const orders = Order.find({email:email});
        res.status(200).json(orders);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Get all order failed"});
    }
}

const getOrderById = async (req,res)=>{
    try{
        const id =  req.params.orderId;
        const doc = await Order.findOne({"_id":id});

        res.status(200).json(doc);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Get all order failed"});
    }
}

const patchOrder = async (req, res) => {
    try{
        res.status(200).json({
            status:"success",
            message:"order modified successfully"
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status:"failed",
            message:"order modified failed"
        });
    }
}

const deleteOrder = async (req, res)=>{
    try{

        const id =  req.params.id;
        const data = await Order.remove({"_id":id});
        res.status(400).json({
            status: "success",
            message: "order deleted successfully"
        });

    }catch(error){
        console.log(error);
        res.status(400).json({message: "order deleted failed"});
    }
}

module.exports = {
    save:save,
    getAllUserOrder: getAllUserOrder,
    getOrderById:getOrderById,
    getAllOrders:getAllOrders,
    patchOrder:patchOrder,
    deleteOrder:deleteOrder
}
