const express=require('express')
const app= express()
const cors=require('cors')
const connectDB=require('./db.js')
const mainRoutes= require('./routes/index.js')
const dotenv=require('dotenv')
dotenv.config({})
const path=require("path")

const dir=path.resolve() 
const PORT= process.env.PORT || 3000

const corsOptions = { 
    origin:true,
    credentials: true, 
};

app.use(cors(corsOptions));

// app.use(express.json({ limit:'10mb' }))

app.use("/api/v1",mainRoutes)
// if(process.env.MODE=='production'){
//     app.use(express.static(path.join(dir,"/frontend/dist")))
// }
// app.get("*",(req,res)=>{
//     res.sendFile(path.join(dir,"frontend","dist","index.html"))
// })

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running at ${PORT}`)
})