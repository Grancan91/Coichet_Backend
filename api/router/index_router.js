const router = require('express').Router()

router
    .use("/auth", require("./auth_router"))
    .use("/coichitos", require("./coichito_router"))

module.exports = router