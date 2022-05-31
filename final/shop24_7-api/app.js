const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const middleware = require('./middleware');
const {connectMongoose} = require('./db-setup');

const app = express();
const handlers = require('./handlers/handlers');
const config = require('./config');


const main = ()=>{

    connectMongoose();
    //middleware
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use((req, res, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, POST,PATCH, GET, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
        next();
    });

    //Routes & handlers
    app.get('/', function(req, res){
        return res.status(200).send('Api is up');
    });

    app.post('/api/v1/users/register', handlers.register);
    app.post('/api/v1/users/login', handlers.login);

    app.post('/api/v1/profile',middleware.checkToken, handlers.profile.getProfile);
    app.delete('/api/v1/profile/image',middleware.checkToken,handlers.profile.profileImageDelete);
    app.patch('/api/v1/profile/image',middleware.checkToken,handlers.profile.profileImagePatch);

    app.patch('/api/v1/profile/address',middleware.checkToken, handlers.profile.profileAddress);

    app.get('/api/v1/homepage/banner',middleware.checkToken,handlers.products.banner);

    app.post('/category', handlers.categories.save);
    app.get('/category', handlers.categories.getAll);
    app.get('/api/v1/homepage/categories', handlers.categories.getAllThree);
    app.get('/category/:categoryId', handlers.categories.getOne);

    // app.get('/orders/:orderId',middleware.checkToken, handlers.order.getOrderById);
    // app.post('/admin/orders',middleware.checkToken,handlers.order.getAllOrders);

    app.get('/api/v1/homepage/products',handlers.products.homepage);
    app.get('/api/v1/products',handlers.products.getAll);
    app.get('/api/v1/products/:PRODUCT_ID',handlers.products.getProduct);
    app.post('/api/v1/admin/products',middleware.checkToken,handlers.products.save);
    app.delete('/api/v1/admin/products/:id',middleware.checkToken,handlers.products.deleteProduct);
    app.patch('/api/v1/admin/products/:id',middleware.checkToken,handlers.products.updateProduct);

    app.post('/api/v1/checkout',middleware.checkToken, handlers.order.save);
    app.get('/api/v1/orders',middleware.checkToken, handlers.order.getAllUserOrder);
    app.patch('/api/v1/orders/:id',middleware.checkToken, handlers.order.patchOrder);
    app.delete('/api/v1/admin/orders/:id',middleware.checkToken, handlers.order.deleteOrder);

    app.listen(config.port, ()=> console.log(`Server started at port: ${config.port}`));
}

main();



