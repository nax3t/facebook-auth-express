require('dotenv').config()

const express  		 = require('express')
const app      		 = express()
const port     		 = process.env.PORT || 3000
const mongoose 		 = require('mongoose')
const passport 		 = require('passport')
const flash    		 = require('connect-flash')

const morgan       = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const session      = require('express-session')

const configDB 		 = require('./config/database.js')

const https 			 = require('https')
const fs 					 = require('fs')

const options 		 = {
  key: fs.readFileSync( './server.key' ),
  cert: fs.readFileSync( './server.crt' ),
  requestCert: false,
  rejectUnauthorized: false
}

// configuration ===============================================================
mongoose.connect(configDB.url) // connect to our database

// load our routes
const userRoutes = require('./routes/users')

// set up our express application
app.use(morgan('dev')) // log every request to the console
app.use(cookieParser()) // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })) // get information from html forms

app.set('view engine', 'ejs') // set up ejs for templating

// required for passport
app.use(session({ 
	secret: 'devsproutgrowyourcareer',
	resave: false,
	saveUninitialized: false
})) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session

// routes ======================================================================
app.use('/', userRoutes)

// launch ======================================================================
const server = https.createServer(options, app)

server.listen(port, () => {
  console.log(`Express server listening on port ${server.address().port}`)
})