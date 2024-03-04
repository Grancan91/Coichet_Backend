const { DataTypes, ENUM } = require('sequelize');
const { sequelize } = require('../database/db_config');

const Coichito = sequelize.define('coichito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.BOOLEAN
    },
    size: {
        type: ENUM('X','M', 'S', 'None')
    }
}, { timestamps: false });

module.exports = Coichito