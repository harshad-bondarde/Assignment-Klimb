const addFile=(req,res)=>{
    const fileContent=req.body
    try {
        console.log("HELLO")
        console.log(fileContent)
        return res.status(200).json({message:'File received'})
    } catch (error) {
        return res.status(500).json({message:'Server Error'})
    }
}

module.exports={addFile}