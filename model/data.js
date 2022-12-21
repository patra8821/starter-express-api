const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
});

module.exports = data = mongoose.model("data", dataSchema);
