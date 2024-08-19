const express = require("express");
const router = express.Router();
const projectController = require("./controllers/projectController");

// API route to get projects
router.get("/api/projects", projectController.getProjects);

module.exports = router;
