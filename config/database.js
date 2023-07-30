const mongoose = require("mongoose");

require("dotenv").config();

exports.connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connection with DB is successful");
    })
    .catch((error) => {
        console.log("Connection with DB failed");
        console.error(error);
        process.exit(1);
    })
}