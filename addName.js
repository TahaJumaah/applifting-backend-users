const { Client } = require("pg");
const config = require("./DbConfig");
const { response } = require("express");
const uuid = require("uuid");
async function addName(req, res) {
  const client = new Client(config);

  const userName = req.body.name;
  await client.connect();

  if (typeof req.body.name === "number") {
    res.send("Name not added");
  } else {
    try {
      const response = await client.query(
        `INSERT INTO names (name, uuid) VALUES ($1, $2)`,
        [userName, uuid.v4()]
      );
      console.log(response);

      console.log("Response OK from DataBase");
      res.send("Name added successfully");
    } catch (error) {
      console.log(error);
      res.send("Name not added");
    } finally {
      client.end();
    }
  }
}

module.exports = addName;
