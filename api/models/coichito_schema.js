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
    description: {
        type: DataTypes.STRING
    },
    material: {
        type: ENUM('Poliester', 'Algodon', 'None')
    }, 
    stock: {
        type: DataTypes.BOOLEAN
    },
    category: {
        type: ENUM('Plusie','Llavero', 'None')
    },
    size: {
        type: ENUM('+30cm', '+15cm', '-15cm')
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, { timestamps: false });

module.exports = Coichito