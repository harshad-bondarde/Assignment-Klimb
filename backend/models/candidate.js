const mongoose=require('mongoose')
const candidateModel=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePhoto:{
        type:String,
        default:""
    },
    gender:{
        type:String,
        anum:['male','female'],
        required:true
    },
    contacts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"        
    }]
},{
    timestamps:true
})

const Candidate=mongoose.model('Candidate',candidateModel)
module.exports=Candidate