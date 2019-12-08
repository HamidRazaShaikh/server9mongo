var express = require('express');
var cors = require ("cors");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var user = require('./Routes/user');
var app = express();
var schema = require('./Routes/schema');
var userModel = schema.userModel;

var uri = "mongodb+srv://hamid:hamid@hamid-yq7y8.mongodb.net/Studentdata?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser : true});


app.use(bodyParser.json({limit: '5000kb'}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use('/user', user);


app.set('port' , process.env.PORT || 4000);
var server = app.listen(app.get('port'),function () {
    console.log("Express server is listening on port" + server.address().port)
});