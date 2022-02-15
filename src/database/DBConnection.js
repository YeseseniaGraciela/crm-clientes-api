const mongoose = require("mongoose");

const uri = "mongodb+srv://yessenia02:Negra0210.@curso-mongodb.npkhg.mongodb.net/crm-clientes";
const DBConnection = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to initialize database")
  }
};

module.exports = DBConnection;