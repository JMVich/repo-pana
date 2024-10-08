import mongoose from "mongoose";

const testConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Panaderia", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
  } finally {
    mongoose.connection.close();
  }
};

testConnection();
