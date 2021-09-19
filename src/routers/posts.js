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
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            refugeeDatumId: req.body.refugeeId
        })
        //const token = await user.genAuthToken()
        res.status(201).send(post)
    } catch (err){
        res.status(400).send(err)
    }
    
})

// Read All Posts Endpoint
router.get("/posts", async (req,res)=>{
    const post = await Post.findAll()
    res.json((post))
})

// Read One Post Endpoint
router.get("/posts/id", (req,res)=>{

})
module.exports = router