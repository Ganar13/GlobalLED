const express = require("express");
const { Photo } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Photo.findAll({ order: [["id", "DESC"]] });
    res.json(orders);
  } catch (error) {
    res.sendStatus(500)
  }
});

module.exports = router;
