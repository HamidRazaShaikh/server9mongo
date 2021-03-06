var express = require('express');
var user = express.Router();
var Schema = require('./schema');
var userModel = Schema.userModel;


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



user.get('/getbyselection' , function (req,res) {
    console.log(req.query);
    userModel.find(req.query,function (error,data) {
        res.send({error : error , data : data});
        console.log(data);
        console.log(error)
    })
});

user.get('/deletebyselection' , function (req,res) {
    console.log(req.query);
    userModel.deleteOne(req.query,function (error,data) {
        res.send({error : error , data : data});
        console.log(data);
        console.log(error)
    })
});


user.post('/Editbyselection' , function (req,res) {
    console.log(req.body);
    userModel.findOneAndUpdate(req.body.find , req.body.replacement,function (error,data) {
        res.send({error : error , data : data});
        console.log(data);
        console.log(error)
    })
});

module.exports = user;