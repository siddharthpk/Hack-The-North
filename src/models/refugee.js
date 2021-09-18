const Sequelize = require("sequelize-cockroachdb");
const cockroach = require('./../db/cockroach')
// Define the Account model for the "accounts" table.
const Refugee = cockroach.define("refugee", {
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


module.exports = Refugee