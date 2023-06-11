const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  auteur: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date_envoi: {
    type: Date,
    default: Date.now,
  },
});

const messageModel = mongoose.model("messsge", messageSchema);

module.exports = messageModel;
