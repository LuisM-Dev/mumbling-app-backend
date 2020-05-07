const express = require("express");
const { accum } = require("../mumble");

const router = new express.Router();

router.post("/mumbling", (req, res) => {
  try {
    const response = { result: accum(req.body.string) };
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/", (req, res) => {
  try {
    res.status(200).send("This is just for API calls");
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
