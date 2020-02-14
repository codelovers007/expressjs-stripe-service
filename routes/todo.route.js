const express = require('express')
const router = express.Router()
const Todo = require('../models/todos.model')

router.get('/', function(req, res){
	// res.render("todo_list")
  let todos = Todo.find(function(err, todos) {
    if (err) {
        console.log(err);
    } else {
      res.json(todos);
    }
	});
})

router.post('/', function(req,res){
	res.send("Create todo")
})

router.get('/:id', function(req,res){
	res.send("Retrive the todo:" + req.params.id)
})

router.put('/:id', function(req, res) {
	res.send("Update todo:" + req.params.id)
})

//More complex routes
router.get('/:name/:id', function(req,res){
	res.send("todo id: " + req.params.id + "," + " name: " + req.params.name )
})
module.exports = router;