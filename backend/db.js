const mongoose=require('mongoose')
const connectDB=async()=>{
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('database connected...')
    }).catch((error)=>{ 
        console.log(error)
    })
}

module.exports=connectDB