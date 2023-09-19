const mongoose = require("mongoose");

const todosSchema = mongoose.Schema({
  title: String,
  priority: Number,
});

const Todo = mongoose.model("todos", todosSchema);

module.exports = Todo;
