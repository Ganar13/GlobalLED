const express = require("express");
const { Services } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Services.findAll({ order: [["id", "DESC"]] });
    res.json(orders);
  } catch (error) {
    res.sendStatus(500)
  }
});

module.exports = router;
