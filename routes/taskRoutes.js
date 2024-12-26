const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Define CRUD routes
router.post("/tasks", taskController.createTask); // Create
router.get("/tasks", taskController.getAllTasks); // Read All
router.get("/tasks/:id", taskController.getTaskById); // Read One
router.put("/tasks/:id", taskController.updateTask); // Update
router.delete("/tasks/:id", taskController.deleteTask); // Delete

module.exports = router;
