require("dotenv").config();
const express = require("express");
const app = express();
const pg = require("pg");
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
app.use(bodyParser);
app.post("/api/addname", addName);
app.post("/api/deletename", deleteName);
const client = new pg.Client(config);
client.connect(function (err) {
  if (err) throw err;
  client.query("SELECT * FROM names", [], function (err, result) {
    if (err) throw err;
    console.log(result.rows);
    client.end(function (err) {
      if (err) throw err;
    });
  });
});

app.listen(2000, () => {
  console.log("App listening on port 2000");
});
