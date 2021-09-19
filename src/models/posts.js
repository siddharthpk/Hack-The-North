const Sequelize = require("sequelize-cockroachdb");
const cockroach = require('./../db/cockroach')
const Helper = require('./helper')
const Refugee = require('./refugee')
// Define the Account model for the "refugees" table.
const Posts = cockroach.define("posts-data", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT
    },
    tags: {
      type: Sequelize.ARRAY
    }
});

// Adding foreign key constraint
Posts.belongsTo(Refugee)

module.exports = Posts