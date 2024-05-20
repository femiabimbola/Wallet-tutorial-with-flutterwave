const mongoose = require("mongoose");

const dotenv = require('dotenv')

// dotenv.config();
const connectionString = process.env.DB_STRING 

exports.connect = async () => {
  try {
    await mongoose.connect(connectionString, {
      autoIndex: true, 
    });
    console.log("Connected to Mongodb Atlas");
  } catch (error) {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  }
};
