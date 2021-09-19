const express = require('express')
const Refugee = require('../models/refugee')
const Post = require('../models/posts')
const sequelize = require('sequelize-cockroachdb')
//const auth = require('../middleware/auth')
const router = new express.Router()

// Create Post
router.post('/newpost', async (req,res) =>{
    try{
        const post = await Post.create({
            creator: req.body.creator,
            title: req.body.title,
            creator_email: req.body.email,
            message: req.body.message,
        })
      
        res.status(201).send(post)
    } catch (err){
        res.status(400).send(err)
    }
    
})

// Read All Posts Endpoint
router.get("/posts", async (req,res)=>{
    
    try{
        const post = await Post.findAll()
        res.status(200).send(post)
    }catch(err){
        res.status(400).send(err)
    }
})

// Read One Post Endpoint
router.get("/posts/id", (req,res)=>{

})

module.exports = router