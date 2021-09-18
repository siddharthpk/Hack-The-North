const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require('fs');
const { constants } = require("buffer");

// Connect to CockroachDB through Sequelize.
const cockroach = new Sequelize({
  dialect: "postgres",
  username: "sid",
  password: "hackthenorth",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "hack-the-north-3480.defaultdb",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      // For secure connection:
      /*ca: fs.readFileSync('certs/ca.crt')
                .toString()*/
    },
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

