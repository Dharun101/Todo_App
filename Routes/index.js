const router = require("express").Router();
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo : String
});

var Todo = mongoose.model('Todo', TodoSchema);

// routes will be here....
router.get("/",async(req, res) => {
    const allTodo = await Todo.find();
    res.render('index', {todo: allTodo});
})

router.post('/add/todo',(req,res)=>{
    const { todo } = req.body;
    const newTodo = new Todo({ todo });

    // save the todo
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
})

router.get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todo Successfully!");
        res.redirect("/");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;