const { DataTypes, ENUM } = require('sequelize')
const { sequelize } = require('../database/db_config')
const Coichito = require('../models/coichito_schema')

const Price = sequelize.define('price', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    coichitoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Coichito,
            key: 'id'
        }
    },
    size: {
        type: ENUM('X', 'M', 'S', 'None')
    },
    value: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

}, { timestamps: false })


module.exports = Price