const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const DBConnection = require("./database/DBConnection")
const productRoutes = require("./routes/product.routes")
const customerRoutes = require("./routes/Customer.routes")

// Camel case . - se entiende mejor el nombre de la variable, primera palabra con minuscula y la siguien con mayuscula
async function startExpressServer(params){
    const app = express()
    app.use(morgan("dev"))

    app.use(cors())
    app.use(express.json())

    const baseURl = "/api/v1"

    app.use(`${baseURl}/product`, productRoutes)
    app.use(`${baseURl}/customer`, customerRoutes)

    app.get('/', (request, response)=>{

        response.json({ message: 'Hola desde el servidor Express.js'})

    })

    await DBConnection()
    const PORT = 4000

    app.listen(PORT, ()=>{
        console.log(`Server listo en http://localhost:${PORT}`)
    })
}
startExpressServer();