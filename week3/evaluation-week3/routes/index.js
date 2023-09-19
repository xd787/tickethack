var express = require("express");
var router = express.Router();
require("../models/connection");
const Todo = require("../models/todos");

// DO NOT EDIT OVER THIS LINE //

// ROUTE GET /todos
router.get("/todos", (req, res) => {
  Todo.find().then(data => {
    res.json({ todos: data });
  });
});
//EXEMPLE DE RÉPONSE :
// {
//   "todos": [
//     {"title": "Aller faire les courses", "priority": 2},
//     {"title": "Faire mes flashcards", "priority": 1},
//     {"title": "Faire une sieste", "priority": 3}
//   ]
// }

// ROUTE POST /todos
router.post("/todos", (req, res) => {
  // déclaration des variables pour récupérer la requête du client, req=requête user, body=corps de la requête
  //   const title = req.body.title;
  //   const priority = req.body.priority;
  // recherche dans la base de données le nom et l'age de l'utilisateur
  //   Todo.findOne({ title: title }).then(data => {
  const newTodo = new Todo({
    title: req.body.title,
    priority: req.body.priority,
  });
  newTodo.save().then(data => {
    //     je converti le resultat en format json et je test via postman
    res.json({ result: true });
  });

  // si aucun nom ne semble présent: créer un nouvel utilisateur
  // if (data === null) {
  //
  //   // je sauvegarde l'utilisateur dans ma data
  //   newTodo.save().then(data => {
  //     // je converti le resultat en format json et je test via postman
  //     res.json({ result: true });
  //   });
  //   // sinon, retourne une erreur car l'utilisateur est déjà présent
  // } else {
  //   res.json({ result: "error", Todo: "todo already saved" });
  // }
});
//EXEMPLE DE RÉPONSE :
// {
//   "result": true
// }

// DO NOT EDIT UNDER THIS LINE //
module.exports = router;
