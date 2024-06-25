const { Client } = require("pg");
const config = require("./DbConfig");
const { response } = require("express");
const uuid = require("uuid");
async function addName(req, res) {
  const client = new Client(config);

  const userName = req.body.name;
  console.log("USERNAME HERE //////////");
  console.log(req.body.name);

  if (!userName || userName.length < 2 || typeof userName === "number") {
    console.log("USERNAM NOT A NAME");
    res.status("444").send("Please provide a name for the user");
  } else {
    try {
      await client.connect();
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
