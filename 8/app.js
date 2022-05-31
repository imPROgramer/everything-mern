const express = require('express');
const app = express();

const port = 3000;

app.get('/',function(req, res){
    return res.status(200).send('Hello World');
})

app.get('/api',function(req, res){
    return res.status(200).send('Hello World Api');
})

app.get('/overview',function(req, res){
    return res.status(200).send('Hello World Overview');
})


app.listen(port, function(){
    console.log(`App is up and listening at ${port}`);
})