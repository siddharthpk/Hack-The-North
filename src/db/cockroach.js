const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require('fs');
const { constants } = require("buffer");
require('dotenv').config()

// Connect to CockroachDB through Sequelize.
const cockroach = new Sequelize({
  dialect: process.env.DB_DIALECT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PWD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
  },
  pool:{
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
});

cockroach
  .authenticate()
  .then(()=>{
    console.log("Database Connected")
  })
  .catch(err=>{
    console.error("Error: Unable to connect to database", err)
  })

cockroach.sync().then(()=>{
  console.log("Database Synced!")
})
module.exports = cockroach

