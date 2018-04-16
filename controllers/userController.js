const User 					 = require('../models/user')
const passport 			 = require('passport')
require('../config/passport')(passport)

exports.index = (req, res, next) => {
	res.render('index') // load the index.ejs file
};

exports.profileGet = (req, res, next) => {
	res.render('profile', {
	    user : req.user // get the user out of session and pass to template
	})
}

exports.authFacebookGet = passport.authenticate('facebook', { scope: 'public_profile' })

exports.authFacebookCallbackGet =
	passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/'
	})

exports.logoutGet = (req, res, next) => {
  req.logout()
  res.redirect('/')
}
