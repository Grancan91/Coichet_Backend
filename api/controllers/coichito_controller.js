const Coichito = require("../models/coichito_schema")

const getCoichito = async (request, response) => {

    try {
        console.log(request.params.id)
        response.send("ok")

    } catch (error) {
        response.status(500).json({
            message: "Error on Fetch",
            error: error
        })
    }

}

    const getCoichitos = async (request, response) => {
        try {
            const data = await Coichito.findAll()
            return response.json(data)
        } catch (error) {
            console.error('Error al obtener coichitos:', error)
            return error
        }
    }
    



const createCoichito = async (request, response) => {

    try {
        const coichito = await Coichito.create(request.body)
        await coichito.save()

        response.status(200).json({
            message: "Created Suscesfully",
            coichito: coichito,
        })

    } catch (error) {
        response.status(500).json({
            message: "Error on Create",
            coichito: request.body,
        })
    }
}

module.exports = { getCoichito, getCoichitos, createCoichito}