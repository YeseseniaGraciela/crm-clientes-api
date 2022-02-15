const {Router} = require("express");

const{getProduct , createProduct, updateProduct, deleteProduct}= require("../controllers/product.controller")

const router = Router();

router.get('/get-product', getProduct)

router.post('/create-product', createProduct )

router.put("/update-product", updateProduct)

router.delete("/delete-product", deleteProduct)

module.exports = router;