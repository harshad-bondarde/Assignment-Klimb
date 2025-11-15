const mongoose=require('mongoose')
const candidateModel=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
    },
    workExperience:{
        type:String,
        default:""
    },
    resumeTitle:{
        type:String,
    },
    currentLocation:{
        type:String,
    },
    postalAddress:{
        type:String,
    },
    currentEmployer:{
        type:String,
    },
    currentDesignation:{
        type:String,
    },
},{
    timestamps:true
})

const Candidate=mongoose.model('Candidate',candidateModel)
module.exports=Candidate