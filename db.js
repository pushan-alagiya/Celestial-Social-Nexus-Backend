const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/social-app";
const connectionMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected");
  });
};
module.exports = connectionMongo;
