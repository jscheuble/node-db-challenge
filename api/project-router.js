const express = require("express");

const db = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getProjects()
    .then((projects) => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ message: "projects not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve projects", err });
    });
});

router.get("/:id", (req, res) => {
  db.getProjectById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "unable to retrieve project", err });
    });
});

module.exports = router;
