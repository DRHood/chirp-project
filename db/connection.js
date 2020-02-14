const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chirp").then(() => {
    console.log("MONGODB is connected");
});

module.exports = mongoose;