const Sequelize = require('sequelize');
const database = require('../config/db')
const moment = require('moment')
const getCode = require('../services/code')

const Finance = database.define('finances', {
    id: {
        type: Sequelize.UUIDV4,
        defaultValue: Sequelize.UUIDV4(),
        primaryKey: true,
        unique: true
    },
    code: {
        type: Sequelize.STRING,
        get: function () {
            return (this.getDataValue('id'))
        }
    },
    value: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        get: function () {
            return moment(this.getDataValue('date')).format('MM DD YYYY')
        },
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            },
            isDate: true
        }
    },
    note: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    person: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio"
            }
        }
    }
})

module.exports = Finance;