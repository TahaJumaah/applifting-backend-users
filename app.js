require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const config = require("./DbConfig");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const addName = require("./addName");
const deleteName = require("./deleteName");
const getAllNames = require("./getAllNames");

app.use(cors());
app.use(express.json());
app.get("/", getAllNames);

app.post("/api/addname", addName);
app.post("/api/deletename", deleteName);

app.listen(process.env.PORT, () => {
  console.log(`App listening on PORT ${process.env.PORT}`);
});
