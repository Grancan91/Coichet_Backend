
const { Sequelize } = require('sequelize') 
require('events').EventEmitter.defaultMaxListeners = 15;

    const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        //logging: console.log
    });
    
    async function db_connect() {
        try {
            await sequelize.authenticate()
            console.log('Connection succesful')
        } catch (error) {
            throw error
        }
    }
    
    async function db_sync() {

    try {
        await sequelize.sync({
            //method[VALUE] 
            alter: true // Force True to Erase all Tables
             })
        console.log('Models Synchronized!')
    } catch (error) {
        throw error
    }
}

module.exports = { db_connect, db_sync, sequelize }