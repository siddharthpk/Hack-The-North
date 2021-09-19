const Sequelize = require("sequelize-cockroachdb");
const cockroach = require('./../db/cockroach')
// Define the Account model for the "refugees" table.
const Helper = cockroach.define("helper-data", {
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


module.exports = Helper