const mongoose = require('mongoose');

const db_name = "db_coichet"
const uri = `mongodb+srv://admin:5052239794vb9df305b@coichet.wdzmbi6.mongodb.net/${db_name}?retryWrites=true&w=majority`;

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