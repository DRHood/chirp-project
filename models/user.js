
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    chirps: [
        {
            type: Schema.Types.ObjectId,
            ref: "Chirp"
        }
    ]
});



module.exports = mongoose.model("User", User);