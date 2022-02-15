const mongoose = require("mongoose");
const config = require("../config")


const DBConnection = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to initialize database")
  }
};

module.exports = DBConnection;