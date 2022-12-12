require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());

app.use(express.json({ extended: false, limit: "250mb" }));

// require("./functions/sendToDb");
app.use("*", async (req, res) => {
  require("./functions/sendToDb");
});

app.listen(port, () => {
  console.log(`server listing on port ${port}..`);
});
