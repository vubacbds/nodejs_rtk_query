const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//về kết nối database MongoDB
const db = require("./config/db");
db.connect();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Router phải để dưới express.json
const route = require("./routes");
route(app);

const PORT = process.env.PORT || 8000;
const listener = app.listen(PORT, () => {
  console.log("Server is running" + listener.address().port);
});