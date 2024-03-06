const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGO_URL}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

async function dbConnect() {
    try{
        await mongoose.connect(uri);
        console.log("Database Connected")

    }
    catch (error) {
        console.log('error moongose')
    }
}

module.exports = { dbConnect }