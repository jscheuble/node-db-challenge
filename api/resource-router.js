const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve resources", err });
    });
});

module.exports = router;
