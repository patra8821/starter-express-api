const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  data: String,
});

module.exports = data = mongoose.model("data", dataSchema);
