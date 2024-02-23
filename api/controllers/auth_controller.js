const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require("bcrypt");
const User = require('../models/user_schema')

const signUp = async (request, response) => {
    try {
        //Paso 1. Encriptamos
        const hashPassword = bcrypt.hashSync(request.body.password, process.env.SALT_ROUNDS);
        const newUser = User.create({email: request.body.email, password: hashPassword})
    
        //Autologin
        const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '1y' })
        return res.status(200).json({ 'token': token });
    } catch (error) {
        
    }
}

const login = async (request, response) => {

    try {
        //Paso 1. Recibir el email y contraseña enviado desde el front.
        const incomingEmail = request.body.email
        const incomingPassword = request.body.password
        //Paso 2. Buscarlo dentro de la base de datos y comprobar que existe.
        const user = await User.findOne({ where: { email: incomingEmail } })

        if (!user) {
            //Paso 3. Si no existe, enviar error.
            response.json({
                message: "Email or Password Incorrect 01"
            })
        } else {
            //Paso 4. Si el usuario existe, comparamos contraseña recibida desde el Front, con la de la BD.
            console.log(user.password)
            console.log(incomingPassword)
            bcrypt.compare(incomingPassword, user.password, (error, result) => {
                if (result) {
                    //Paso 5. Si las contraseñas coinciden, creamos un Token para ese usuario.
                    const token = jsonwebtoken.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '10h' })
                    //Lo devolvemos al front.
                    console.log(token)
                    return response.json({ Authorization: token })
                } else {
                    console.log(result)
                }
                return response.send("Email or Password incorrect 02")
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
        const token = request.headers.authorization
    //    console.log(token)
        jsonwebtoken.verify(token, process.env.JWT_SECRET, async (error, result) => {
            if (error) return response.status(401).send("Token not valid")
            console.log(result)
            const user = await User.findOne({ where: { email: result.email } })
            if (!user) return response.status(401).send('Token not valid')

            response.locals.user = user
            next()
        })

    } catch (error) {

    }
}


module.exports = { login, signUp, checkAuth }