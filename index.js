//Importing all files and modules
const express = require('express')
const cockroach = require('./src/db/cockroach')
const refugeeRouter = require('./src/routers/refugee')
const helperRouter = require('./src/routers/helper')
const postsRouter = require('./src/routers/posts')
require('./src/db/cockroach') // --> DO NOT DELETE


// Starting express server
const app = express()
const port = process.env.PORT || 5000

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

app.use(helperRouter)

app.use(postsRouter)

// Landing page for API
app.get("/", (req, res) => {
    res.json({ message: "Welcome to our HTN application." });
  });

// Start server listening
app.listen(port, ()=>{
    console.log('Server is running on port ' + port)
})