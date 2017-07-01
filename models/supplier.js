var mongoose=require('mongoose');

//Supplier schema
var supplierSchema=mongoose.Schema({
    name:{
        type:String,

    },
    email:{
        type:String,

    },
    drugID:{
        type:String,

    }

});

var Supplier=module.exports=mongoose.model('Supplier',supplierSchema);

//get Supplier
module.exports.getSuppliers=function (callback,limit) {
    Supplier.find(callback).limit(limit);
}

/*
//get Supplier by drug id
module.exports.getSupplier=function (callback,limit) {
    Supplier.find({""}).limit(limit);
}
*/

//get Supplierbyid
module.exports.getSupplierById=function (id,callback) {
    Supplier.findById(id,callback);
}

//get Supplierbycategory
module.exports.getSupplierByCategory=function (category,callback) {
    Supplier.find(category,callback);
}

//Add Supplier
module.exports.addSupplier=function (supplier,callback) {
    Supplier.create(supplier,callback);
}

//Update Supplier
module.exports.updateSupplier=function (id,supplier,options,callback) {
    var query={_id: id};
    var update={
        name:supplier.name,
        email:supplier.email,
        drugID:supplier.drugID,
    }
    Supplier.findOneAndUpdate(query,update,options,callback);
}

//Delete Supplier
module.exports.deleteSupplier=function (id,callback) {
    var query={_id:id};
    Supplier.remove(query,callback);
}