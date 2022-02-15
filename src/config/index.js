const  dotenv = require('dotenv')

dotenv.config()

const config = {
        mondoUri: process.env.MONGO_URI, 
        port: process.env.PORT,
}

module.exports = config