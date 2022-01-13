require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', process.env.DB_PASSWORD, {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
});

module.exports = sequelize;