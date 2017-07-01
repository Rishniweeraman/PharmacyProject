/**
 * Created by Admin on 7/1/2017.
 */
/**
 * Created by Admin on 6/30/2017.
 */
var mongoose=require('mongoose');

var prescriptiondetailSchema=mongoose.Schema({
    patientHIN:{
        type:String,
        required:true
    },
    prescriptionID:{
        type:String,
        required:true
    },

    drugdescription:{
        type:String

    },
    dosage:{
        type:String

    },
    period:{
        type:String

    },
    quantity:{
        type:String

    }

});

var Prescriptiondetail =module.exports=mongoose.model('Prescriptiondetail',prescriptiondetailSchema);


/*
//get all prescriptiondetails
module.exports.getPrescriptiondetails=function (callback,limit) {
    Prescriptiondetail.find(callback).limit(limit);
}
*/
module.exports.getPrescriptionByID=function (id,callback) {
    Prescriptiondetail.find({'patientHIN':id},callback)
}
