const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const User = require('../models/user_schema')

const signUp = async (request, response) => {
    try {

        const hashPassword = bcrypt.hashSync(request.body.password, parseInt(process.env.SALT_ROUNDS));
        const newUser = await User.create({email: request.body.email, password: hashPassword})

        const token = jsonwebtoken.sign({ email: newUser.email}, process.env.JWT_SECRET, { expiresIn: '1y' })
        return response.status(200).json({ 'token': token });

    } catch (error) {
        return response.status(400).send(error)
    }
}

const login = async (request, response) => {

    try {
        const incomingEmail = request.body.email
        const incomingPassword = request.body.password
        const user = await User.findOne({ where: { email: incomingEmail } })

        if (!user) {
            response.json({
                message: "Email or Password Incorrect"
            })
        } else {

            bcrypt.compare(incomingPassword, user.password, (error, result) => {
                if (result) {
                    const token = jsonwebtoken.sign({ email: incomingEmail }, process.env.JWT_SECRET, { expiresIn: '10h' })
                    return response.json({ Authorization: token })
                } else {
                    console.log(result)
                }
                return response.send("Email or Password incorrect")
            })
        }

    } catch (error) {
        return response.status(200).json({
            message: error
        })
    }
}

const checkAuth = (request, response, next) => {
    try {
        console.log(request)
        const token = request.headers.authorization
        //console.log(token)
        jsonwebtoken.verify(token, process.env.JWT_SECRET, async (error, result) => {
            if (error) return response.status(401).send("Token not valid")

            const user = await User.findOne({ where: { email: result.email } })
            if (!user) return response.status(401).send('Token not valid')
            
            next()
        })

    } catch (error) {
        console.log(error)
    }
}


module.exports = { login, signUp, checkAuth }