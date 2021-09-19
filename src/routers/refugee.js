const express = require('express')
const Refugee = require('../models/refugee')
const sequelize = require('sequelize-cockroachdb')
//const auth = require('../middleware/auth')
const router = new express.Router()

// Refugee Signup
router.post('/refugeesignup', async (req,res) =>{
    const refugee = new Refugee(req.body)
    console.log(req.body)
    try{
        await refugee.save()
        //const token = await user.genAuthToken()
        res.status(201).send(refugee)
    } catch (err){
        res.status(400).send(err)
    }
    
})

// Refugee Read Endpoint
router.get("/refugees", async (req,res)=>{
    const refugee = await Refugee.findAll()
    res.json((refugee))
})


module.exports = router