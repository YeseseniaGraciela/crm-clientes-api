const Product = require("../schemas/Product")

const getProduct = async (req, res)=>{
    try {

        const products = await Product.find()
        return res.status(200).json({
            ok:true,
            message: "",
            products,
        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            message: "Ocurrió un error con el servidor, inténtalo de nuevo"
            })
    }
}

const createProduct = async(req, res)=>{
    try {
        const {name, stock, price} = req.body

        const newProduct = new Product({name, stock, price})
        
        const productSaved = await newProduct.save()

        return res.status(200).json({
            ok:true,
            message: "Producto creado con éxito",
            product: productSaved,
        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            message: "Ocurrió un error con el servidor, inténtalo de nuevo"
            })
    }
}

const updateProduct = async (req, res)=>{
    try {
        const {id, name, stock, price} = req.body
        const userExists =await Product.exists({_id: id})
        
        if (!userExists) 
            return res.status(404).json({
                ok:false,
                message: "No existe el producto"
            })
        const productUpdate = await Product.findByIdAndUpdate(id, {
            $set: {name, stock, price},
        }, {
            new: true
        })

        return res.status(200).json({
            ok:true,
            message: "Producto actualizado con éxito",
            product: productUpdate,
        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            message: "Ocurrió un error con el servidor, inténtalo de nuevo"
            })
    }
}

const deleteProduct = async (req, res)=>{
    try {
        const {id} = req.body
        const userExists =await Product.exists({_id: id})
        
        if (!userExists) 
            return res.status(404).json({
                ok:false,
                message: "No existe el producto"
            })
        
        const producDeleted = await Product.deleteOne({_id: id})

        return res.status(200).json({
            ok:true,
            message: "Producto eliminado con éxito",
            product: {_id: id, ...producDeleted},
        
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            message: "Ocurrió un error con el servidor, inténtalo de nuevo"
            })
    }
}



module.exports = {getProduct, createProduct, updateProduct, deleteProduct}