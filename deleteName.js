const { Client } = require("pg");
const config = require("./DbConfig");
const { response } = require("express");

async function deleteName(req, res) {
  const client = new Client(config);
  const uuid = req.body.uuid;
  console.log(req.body.uuid);
  if (uuid) {
    try {
      await client.connect();
      const response = await client.query("DELETE FROM names WHERE uuid = $1", [
        uuid,
      ]);

      console.log(response);
      res.json(response);
    } catch (error) {
      console.log(error);
      res.send(error);
      res.send(error);
    } finally {
      client.end();
    }
  }
}

module.exports = deleteName;
