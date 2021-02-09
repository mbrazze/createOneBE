var express = require("express");
var router = express.Router();

const {
  createClient,
  getAllClients,
  deleteClient,
} = require("../models/clients");

/*-----Create Client-----*/
router.post("/", async function (req, res) {
  let body = req.body;
  const client = await createClient(body);
  res.json(client);
});

/*-----Get ALL Clients-----*/
router.get("/", async function (req, res) {
  let client = await getAllClients();
  return res.json({ success: true, payload: client });
});

/*-----Delete Client-----*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete id, routes:", id);
  deleteClient(id);
  return res.json({ success: true, payload: "Client has been deleted" });
});

module.exports = router;
