const express = require('express')

const app = express()

const todoRoutes = require('./routes/todo.route')

const reactView = require('express-react-views')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// Using Pug template engine for render views
// app.set('view engine', 'pug')
// app.set('views', './views')
// using reactjs template engine
app.set('view engine', 'jsx');
app.set('views', './views')
var options = { beautify: true };
app.engine('jsx', reactView.createEngine(options));

// Handle todo routes
app.use('/todos', todoRoutes)

// Handle invalid routes
app.get('*', function(req, res){
	res.send("Hi friend this route is not working cunrrently")
})

// Setup MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/todos');
const connection = mongoose.connection;
connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

// Listning port and host
app.listen(3000, '192.168.1.16')