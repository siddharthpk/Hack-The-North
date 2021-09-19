const express = require('express')
const Helper = require('../models/helper')
const sequelize = require('sequelize-cockroachdb')
//const auth = require('../middleware/auth')
const router = new express.Router()

// Helper Signup
router.post('/helpersignup', async (req,res) =>{
    const helper = new Helper(req.body)
    console.log(req.body)
    try{
        await helper.save()
        //const token = await user.genAuthToken()
        res.status(201).send(helper)
    } catch (err){
        res.status(400).send(err)
    }
    
})

// Helper Read Endpoint
router.get("/helpers", async (req,res)=>{
    const helper = await Helper.findAll()
    res.json((helper))
})


module.exports = router