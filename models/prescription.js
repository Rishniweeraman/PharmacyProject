/**
 * Created by Admin on 7/1/2017.
 */
var mongoose=require('mongoose');

var prescriptionSchema=mongoose.Schema({
    patientHIN:{
        type:String,
        required:true
    },
    patientname:{
        type:String,
        required:true
    },
    prescriptionID:{
        type:String,
        required:true
    },
    create_date:{
        type:Date
    },
    pres_date:{
        type:Date
    }
});

var Prescription =module.exports=mongoose.model('Prescription',prescriptionSchema);


//get all prescriptions
module.exports.getPrescriptions=function (callback,limit) {
    Prescription.find(callback).limit(limit);
}

// get a prescription
module.exports.getPrescriptionsById=function(id,callback) {
    Prescription.findById(id,callback);
}

// get a prescription by patientid
module.exports.getPrescriptionsByPatientId=function(patientHIN,callback) {
    Prescription.find({'patientHIN':patientHIN},callback);
}



//add a prescriptions
module.exports.addPrescription=function (prescription,callback) {
    Prescription.create(prescription,callback);
}


//update a prescriptions
module.exports.updatePrescription=function (id,prescription,options,callback) {
    var query={_id:id};
    var update={
        patientHIN:prescription.patientHIN,
        patientname:prescription.patientname,
        prescriptionID:prescription.prescriptionID,
        create_date:prescription.create_date,
        pres_date:prescription.pres_date
    }
    Prescription.findOneAndUpdate(query,update,options,callback);
}

module.exports.deletePrescription=function (id,callback) {
    var query={_id:id};
    Prescription.remove(query,callback);
}

