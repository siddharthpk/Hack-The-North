//Importing all files and modules
const express = require('express')
const cockroach = require('./src/db/cockroach')
const refugeeRouter = require('./src/routers/refugee')
// const taskRouter = require('./router/task')
require('./src/db/cockroach') // --> DO NOT DELETE

const Refugee = require('./src/models/refugee')

// Starting express server
const app = express()
const port = process.env.PORT || 3000

// Express Middleware for token authentication step
// app.use((req, res, next)=>{
//     //console.log(req.method, req.path)
//     //next()
//     res.status(503).send('Under Maintenance')
// })

// Accepting json
app.use(express.json())

// Refugee Router
app.use(refugeeRouter)

// Create table(s) with sync()
cockroach.sync().then(()=>{
    console.log("Database Synced!")
})

// Landing page for API
app.get("/", (req, res) => {
    res.json({ message: "Welcome to our HTN application." });
  });


// Refugee Read Endpoint
app.get("/refugees", (req,res)=>{

})

// Helper Sign up Endpoint
app.post("/helpersignup", (req,res)=>{

})

// Helper Read Endpoint
app.get("/helpers", (req,res)=>{

})

// Create Posts Endpoint
app.post("/newpost", (req,res)=>{

})

// Read All Posts Endpoint
app.get("/posts",(req,res)=>{

})

// Read One Post Endpoint
app.get("/posts/id", (req,res)=>{

})


// Start server listening
app.listen(port, ()=>{
    console.log('Server is running on port ' + port)
})