const data = require("../model/data");

const sendToDb = async (req, res) => {
  try {
    const dataData = new data({
      data: req.body.data,
    });

    await dataData.save();
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log("Error On data savinig on db:", error.message);
  }
};

module.exports = sendToDb;
