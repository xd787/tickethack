const db = require("./database/setup"); // Do not edit/remove this line

//db.find({ lastName: 'Awesome' })
//.then(data => {
//console.log(data);
//});
// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
  const newTodo = new db({
    name,
    priority,
    done: false,
  });
  newTodo.save();
}

// Complete one todo by name (update property done = true)
function completeTodo(name) {
  db.updateOne({ name }, { done: true }).then(data =>
    console.log("result:", data)
  );
}

// Delete one todo by name
function deleteTodo(name) {
  db.deleteOne({ name }).then(() => console.log("done"));
}

createTodo("feed dog", 2);

module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
