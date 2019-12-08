var mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
     Name :{ type : String , required : true},
     Father :{ type : String , required : true},
     Class :{ type : String , required : true},
     Grade :{ type : String , required : true}

});

exports.userModel = mongoose.model('students', userSchema);

