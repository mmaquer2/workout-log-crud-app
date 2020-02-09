const Sequelize = require('sequelize');

    //sequelize arguements database name/ owner/password
    //tablename == workoutdata in pgadmin 4 in the workoutlogdata database

module.exports =  new Sequelize('workOutDb', 'postgres', 'PASS', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  timestamps: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

//table name is workOutStat