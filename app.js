const express = require('express');
const app = express();
const mongoose = require('mongoose');


//Connection to database
mongoose.connect('mongodb://localhost/todo_express', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>{
    console.log('Connected to database');
});

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.use(require('./Routes/index'));

//Listening to a port
app.listen(3000,()=>{
    console.log('Listening to port 3000');
});