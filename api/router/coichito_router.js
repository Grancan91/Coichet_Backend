const router = require('express').Router()

//const { checkAuth } = require('../controllers/auth_controller')
const { getCoichitos, getCoichito, createCoichito } = require("../controllers/coichito_controller")

router
    .get("/", getCoichitos)
    .get("/:id", getCoichito)
    .post("/", createCoichito)
    //.patch("/:id")

module.exports = router