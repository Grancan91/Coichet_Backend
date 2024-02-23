const router = require('express').Router()

const { checkAuth, login, signUp } = require('../controllers/auth_controller')

router
    .post("/login", login)
    .post("/signup", signUp)

module.exports = router