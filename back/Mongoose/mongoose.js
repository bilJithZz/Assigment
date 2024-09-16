const mongoose = require('mongoose');
require('dotenv').config();  

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGO_URI environment variable is not defined');
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);  
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  
  }
};

module.exports = connectDB;
