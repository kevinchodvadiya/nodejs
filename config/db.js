const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://kevin1233:8B951rhLLGb9bS6T@cluster0.8ifcm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
};

module.exports = connectDB;
