const addFile=(req,res)=>{
    // const {description}=req.body
    console.log(req.body)
    try {
        // console.log(description)
        return res.status(200).json({message:'File received',file:req.body})
    } catch (error) {
        return res.status(500).json({message:'Server Error'})
    }
}

module.exports={addFile}