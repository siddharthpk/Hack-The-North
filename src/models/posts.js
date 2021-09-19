const Sequelize = require("sequelize-cockroachdb");
const cockroach = require('./../db/cockroach')
const Helper = require('./helper')
const Refugee = require('./refugee')
// Define the Account model for the "refugees" table.
const Posts = cockroach.define("posts-data", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
    creator: {
      type: Sequelize.TEXT,
      defaultValue: null
    },
    title: {
      type: Sequelize.STRING,
    },
    creator_email: {
      type: Sequelize.TEXT,
      defaultValue: null
    },
    message: {
      type: Sequelize.TEXT
    },
});

// Adding foreign key constraint
//Posts.belongsTo(Refugee)

module.exports = Posts