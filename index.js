const express = require('express')

const app = express()

const stripeRoutes = require('./routes/stripe.routes')

const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// Handle routes

app.use('/stripe', stripeRoutes)
// Handle invalid routes
app.get('*', function(req, res){
	res.send("Hi friend this route is not working cunrrently")
})


// Listning port and host
app.listen(3500)