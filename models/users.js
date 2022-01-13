const Sequelize = require('sequelize');
const database = require('../config/db')

const User = database.define('users', {
    id: {
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        unique: true
    },
    name: {
        type: Sequelize.STRING(80),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    }
})

module.exports = User;