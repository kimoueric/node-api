const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/node-api");

module.exports = mongoose;
