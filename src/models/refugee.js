const Sequelize = require("sequelize-cockroachdb");

// Define the Account model for the "accounts" table.
const Refugee = sequelize.define("refugee", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.TEXT
    },
    password: {
      type: Sequelize.TEXT
    },
    nationality: {
      type: Sequelize.TEXT
    }
});

// Create the "refugee" table.
Refugee.sync()
 

const addRows =  () => {

    
    // Insert two rows into the "accounts" table.
    Refugee.bulkCreate([
      {
        id: 1,
        balance: 100,
      },
      {
        id: 2,
        balance: 20,
      },
    ]);
}

const readALL = () => {
    // Retrieve accounts.
    return Refugee.findAll();
}


  // .then(function (accounts) {
  //   // Print out the balances.
  //   accounts.forEach(function (account) {
  //     console.log(account.id + " " + account.balance);
  //   });
  //   process.exit(0);
  // })
  // .catch(function (err) {
  //   console.error("error: " + err.message);
  //   process.exit(1);
  // });

  module.exports = Refugee