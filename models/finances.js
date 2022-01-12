const Sequelize = require('sequelize');
const database = require('../config/db')

const Finance = database.define('finances', {
    id: {
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        unique: true
    },
    code: {
        type: Sequelize.UUID
    },
    value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    date: {
        type: Sequelize.DATEONLY,
    },
    note: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    person: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
})

module.exports = Finance