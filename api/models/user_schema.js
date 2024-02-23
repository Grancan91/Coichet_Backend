const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db_config')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM("user","admin"),
        defaultValue: "user"
    }
});

module.exports = User