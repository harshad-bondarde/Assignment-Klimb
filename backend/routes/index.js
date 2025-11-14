const express=require('express')
const { addFile } = require('../controllers/index.js')
const router=express.Router()

router.post('/upload',addFile)

module.exports=router