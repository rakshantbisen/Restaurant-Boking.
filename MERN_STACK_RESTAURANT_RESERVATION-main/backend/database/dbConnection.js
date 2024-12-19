import mongoose from 'mongoose';

export const dbConnection = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/restaurant";

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Some error occurred while connecting to the database:", error.message);
  }
};
