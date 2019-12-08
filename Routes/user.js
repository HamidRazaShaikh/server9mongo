var express = require('express');
var user = express.Router();
var schema = require('./schema');
var userModel = schema.userModel;


user.post('/add',function (req,res) {
    var addData = new userModel (req.body);
    addData.save(function (error,data) {
        res.send({error : error , data : data});
        console.log(data);
        console.log(error);
    })
});

user.get('/get' , function (req,res) {
    userModel.find().exec(function (error,data) {
        res.send({error : error , data : data});
        console.log(data);
        console.log(error)
    })
});





module.exports = user;