const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./product');

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(productRouter);

app.listen(1414,'0.0.0.0',()=>{
    console.log('server started on port 1414');
})
