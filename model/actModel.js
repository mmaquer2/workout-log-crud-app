const Sequelize = require('sequelize');
const db = require('../config/dbConn');

const Act = db.define('workOutStats', {
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

module.exports = Act;