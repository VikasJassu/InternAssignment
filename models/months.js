const mongoose = require("mongoose");

const monthSchema = new mongoose.Schema({
    month:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Month", monthSchema);