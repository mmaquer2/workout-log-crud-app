const Sequelize = require('sequelize');
const db = require('../config/db_conn');

const user = db.define('workoutdata', {
  workouttype: {
    type: Sequelize.STRING
  },
  workoutdist: {
    type: Sequelize.STRING
  },
  workouttime: {
    type: Sequelize.STRING
  }
});

module.exports = user;