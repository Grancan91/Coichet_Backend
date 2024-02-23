const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db_config')

const Coichito = sequelize.define('coichito', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    }
});

module.exports = Coichito