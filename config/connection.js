require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = process.env.JAWSDB_URL
  // conditional (ternary) operator to set sequelize to remote database if process.env.JAWSDB_URL is truthy or to local database using .env variables if it's falsy
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true
    }
  })

module.exports = sequelize
