const mongoose = require("mongooose");
const { Schema } = mongoose;

const taskShema = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
});

const Task = mongoose.model(taskShema);
module.exports = Task;
