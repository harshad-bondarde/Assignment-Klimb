const addFile=(req,res)=>{
    
    try {
        return res.status(200).json({message:'File received',file:req.body})
    } catch (error) {
        return res.status(500).json({message:'Server Error'})
    }
}

module.exports={addFile}