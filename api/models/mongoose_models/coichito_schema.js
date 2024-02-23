const mongoose = require('mongoose');

const coichitoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 1
    }
});

const Coichito = mongoose.model("Coichito", coichitoSchema)

module.exports = Coichito
