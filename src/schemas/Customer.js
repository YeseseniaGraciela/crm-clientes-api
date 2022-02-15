const {Schema, model} = require("mongoose")

const CustomerSchema = new Schema({
    
    name:{
        type: String,
        required: true, 
    },
    email: {
        type: String,
        unique:true,
        required:true,
    },
    empresa:{
        type: String,
        required:true,
    },
    telefono:{
        type: String,
    }

}, {
    timestamps:true,
    versionKey:false,
})

module.exports = model('Customer', CustomerSchema, 'Customers')