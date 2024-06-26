const { Client } = require("pg");
const config = require("./DbConfig");
const { response } = require("express");
const uuid = require("uuid");
async function getAllNames(req, res) {
  const client = new Client(config);

  await client.connect();

  try {
    // client.query("CREATE TABLE names  (name VARCHAR(255), uuid VARCHAR(255)) ");
    const response = await client.query("SELECT * FROM names");

    console.log(response.rows);

    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.send("DB Error");
  } finally {
    client.end();
  }
}

module.exports = getAllNames;
