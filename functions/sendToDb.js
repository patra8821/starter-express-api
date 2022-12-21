const data = require("../model/data");

const sendToDb = async (req, res) => {
  try {
    console.log("called sendToDb");
    if (!req.body.data) {
      console.log("data required");
      res.status(400).json({ message: "data required" });
    }
    const dataData = new data({
      data: req.body.data,
    });

    await dataData.save();
    console.log("success sendToDb");
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log("Error On data savinig on db:", error.message);
  }
};

module.exports = sendToDb;
