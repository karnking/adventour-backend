const mongoose = require('mongoose')
require('dotenv').config()

const options = {
    useNewUrlParser : true,
    useUnifiedTopology: true
}

const connection = mongoose.connect(`mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASS}@cluster0.uibmoog.mongodb.net/adventour?retryWrites=true&w=majority`,options)

module.exports = {connection}