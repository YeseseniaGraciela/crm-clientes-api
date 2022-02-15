const express = require("express")
const morgan = require("morgan")
const cors = require("cors");

const config = require("./config")

const DBConnection = require("./database/DBConnection")
const productRoutes = require("./routes/product.routes")
const customerRoutes = require("./routes/customer.routes")

// Camel case . - se entiende mejor el nombre de la variable, primera palabra con mayuscula y la siguiente empieza con mayuscula
async function startExpressServer(params){
    const app = express()
    
    const baseURl = "/api/v1"

    app.use(morgan("dev"))

    app.use(cors())

    app.use(express.json())

    

    app.use(`${baseURl}/product`, productRoutes)

    app.use(`${baseURl}/customer`, customerRoutes)

    app.get('/', (request, response)=>{
   
        response.json({ message: 'Hola desde el servidor Express.js'})

    });

    await DBConnection();

    
    app.listen(config.port, ()=>{
        console.log(`Server listo en http://localhost:${config.port}`);
    });
}
startExpressServer();