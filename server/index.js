// server.js

const mongoose = require("mongoose");
const config = require("./utils/config");
const app = require("./app");

console.log("Connecting to MongoDb...");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected To MongoDB...");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on Port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB...", error.message);
  });
