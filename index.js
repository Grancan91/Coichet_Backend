const express = require('express')
const cors = require('cors');
require('dotenv').config()
const router = require("./api/router/index_router")
const morgan = require('morgan');

const { db_connect, db_sync } = require('./api/database/db_config');

const appExpress = express()
    .use(express.json())
    .use(cors())
    .use("/api", router)
    .use(morgan)

    try {
        appExpress.listen(process.env.API_PORT, () => {
            console.log(`Server Liseting on ported: ${process.env.API_PORT}`)
        })
    } catch (error) {
        console.log(error)
    }

db_connect()
//db_sync()

module.exports = { appExpress }
