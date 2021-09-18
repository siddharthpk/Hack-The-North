 const Sequelize = require("sequelize-cockroachdb");
// For secure connection:
const fs = require('fs');

// Connect to CockroachDB through Sequelize.
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "nick",
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

console.log("Connection Successful")
/* Below is a separate account table to test the connection */

// Define the Account model for the "accounts" table.
const Account = sequelize.define("accounts", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  balance: {
    type: Sequelize.INTEGER,
  },
});

// Create the "accounts" table.
Account.sync({
  force: true,
})
  .then(function () {

    
    // Insert two rows into the "accounts" table.
    return Account.bulkCreate([
      {
        id: 1,
        balance: 100,
      },
      {
        id: 2,
        balance: 20,
      },
    ]);
  })
  .then(function () {
    // Retrieve accounts.
    return Account.findAll();
  })
  .then(function (accounts) {
    // Print out the balances.
    accounts.forEach(function (account) {
      console.log(account.id + " " + account.balance);
    });
    process.exit(0);
  })
  .catch(function (err) {
    console.error("error: " + err.message);
    process.exit(1);
  });
