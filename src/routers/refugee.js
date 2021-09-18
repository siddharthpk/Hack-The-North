const express = require('express')
const Refugee = require('../models/refugee')
//const auth = require('../middleware/auth')
const router = new express.Router()

// Refugee Signup
router.post('/refugeesignup', async (req,res) =>{
    const refugee = new Refugee(req.body)
   
    try{
        await refugee.save()
        //const token = await user.genAuthToken()
        res.status(201).send(refugee)
    } catch (err){
        res.status(400).send(err)
    }
    
})

module.exports = router