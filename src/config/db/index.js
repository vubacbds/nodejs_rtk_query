const mongoose = require("mongoose");
const dotenv = require("dotenv");

async function connect() {
  try {
    await mongoose
      .connect(
        process.env.MONGODB_URI ||
          "mongodb+srv://bac:uytin100@cluster0.7tlpeul.mongodb.net/demo-rtk-query-db",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Kết nối thành công !");
      })
      .catch((err) => {
        console.log("Kết nối thất bại !", err);
      });
  } catch (error) {
    console.log("Kết nối MongoDB thất bại! Lỗi hệ thống");
  }
}

module.exports = { connect };
