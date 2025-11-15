const express=require('express')
const { addFile } = require('../controllers/candidate.js')
const router=express.Router()

router.post('/upload',addFile)

module.exports=router