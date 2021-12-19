const mongoose = require("mongoose"); // Mongoose for MongoDB
const mongoURI =
    "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    });
};

module.exports = connectToMongo;
