const express = require("express");
const bodyParser = require("body-parser");
const middleware = require("./middleware/middleware");
const dbConnection = require("./db/mongoose-connection");
const config = require('./config');

//api controller 
const getProducts = require("./controllers/getProducts");
const login = require("./controllers/login");
const register =  require("./controllers/register");

//make connection
dbConnection.connectDB();

//start server and app
const main  = function (){
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(function(req,res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
        next();
    });

    // add end points

    app.post("/api/v1/register", register);
    app.post("/api/v1/login", login);
    app.get("/api/v1/products",middleware.checkToken, getProducts);
    app.get("/api/test",function(req,res){
        res.status(200).json({"status":"Working"});
    });

    app.listen(config.port, ()=>{console.log(`Server started at port ${config.port}`)});
};

main();