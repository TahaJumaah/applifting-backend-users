const { Client } = require("pg");
const config = require("./DbConfig");
const { response } = require("express");
const uuid = require("uuid");
async function getAllNames(req, res) {
  const client = new Client(config);

  await client.connect();

  try {
    const response = await client.query("SELECT * FROM names");

    console.log(response);

    res.json(response.rows);
  } catch (error) {
    console.log(error);
    res.send("DB Error");
  } finally {
    client.end();
  }
}

module.exports = getAllNames;
