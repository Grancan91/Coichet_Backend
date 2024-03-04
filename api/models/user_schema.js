const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db_config')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM("user","admin"),
        defaultValue: "user"
    }
}, { timestamps: false });

module.exports = User