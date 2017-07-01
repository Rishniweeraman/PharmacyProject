var mongoose=require('mongoose');

//Drug schema
var drugSchema=mongoose.Schema({
    name:{
        type:String,

    },
    unitType:{
        type:String,

    },
    category:{
        type:String,

    },
    price:{
        type:String,

    },
    quantity:{
        type:String,

    },
    batchNo:{
        type:String,

    },
    batchStatus:{
        type:String,

    },
    manufactureDate:{
        type:Date,

    },
    expirationDate:{
        type:Date,

    },
    remarks:{
        type:String,

    },
    dosage:{
        type:String,

    },
    frequency:{
        type:String,

    },
    supplierName:{
        type:String,

    },
    supplierEmail:{
        type:String,

    }
});

var Drug=module.exports=mongoose.model('Drug',drugSchema);

//get Drugs
module.exports.getDrugs=function (callback,limit) {
    Drug.find(callback).limit(limit);
}


//get Drugbyid
module.exports.getDrugById=function (id,callback) {
    Drug.findById(id,callback);
}

//get Drug name by category
module.exports.getDrugsByCategory=function (category,callback) {
    var selectedCategory={category: category};
    Drug.find({'category':selectedCategory},callback);
}


//Add Drug
module.exports.addDrug=function (drug,callback) {
    Drug.create(drug,callback);
}

//Update Drug
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
        supplierName:drug.supplierName,
        supplierEmail:drug.supplierEmail,
    }
    Drug.findOneAndUpdate(query,update,options,callback);
}

//Delete Drug
module.exports.deleteDrug=function (id,callback) {
    var query={_id:id};
    Drug.remove(query,callback);
}