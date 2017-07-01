var mongoose=require('mongoose');

//user schema
var userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    pwd:{
        type:String

    },
    com_pwd:{
        type:String

    }

});

var User=module.exports=mongoose.model('User',userSchema);

//Add User
module.exports.addUser=function (user,callback) {
    //console.log('add user called');
    User.create(user,callback);
}


