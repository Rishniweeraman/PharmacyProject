var mongoose=require('mongoose');

//Email schema
var emailSchema=mongoose.Schema({
    drugID:{
        type:String

    },
    supplierID:{
        type:String

    },
    from:{
        type:String

    },
    to:{
        type:String

    },
    subject:{
        type:String

    },
    text:{
        type:String

    },
    date:{
        type:Date,
        default:Date.now
    }
});

var Email=module.exports=mongoose.model('Email',emailSchema);

//get Email
module.exports.getEmails=function (callback,limit) {
    Email.find(callback).limit(limit);
}


//get Emailbyid
module.exports.getEmailById=function (id,callback) {
    Email.findById(id,callback);
}

//Add Email
/*
module.exports.sendMail=function (email,callback) {
    Email.create(email,callback);
}
*/
//Add Email
module.exports.sendMail=function (email,callback) {
    Email.create(email,callback);
}

/*
//Update Email
module.exports.updateDrug=function (id,drug,options,callback) {
    var query={_id: id};
    var update={
        name:drug.name,
        unitType:drug.unitType,
        category:drug.category,
        price:drug.price,
        quantity:drug.quantity,
        batchNo:drug.batchNo,
        batchStatus:drug.batchStatus,
        manufactureDate:drug.manufactureDate,
        expirationDate:drug.expirationDate,
        remarks:drug.remarks,
        dosage:drug.dosage,
        frequency:drug.frequency,
    }
    Drug.findOneAndUpdate(query,update,options,callback);
}
*/

//Delete Email
module.exports.deleteEmail=function (id,callback) {
    var query={_id:id};
    Email.remove(query,callback);
}