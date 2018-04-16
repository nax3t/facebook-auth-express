const mongoose = require('mongoose')
const bcrypt   = require('bcrypt-nodejs')

// define the schema for our user model
const UserSchema = mongoose.Schema({
	facebook: {
	  id: String,
	  token: String,
	  name: String
	}
})

// create the model for users and expose it to our app
module.exports = mongoose.model('User', UserSchema)