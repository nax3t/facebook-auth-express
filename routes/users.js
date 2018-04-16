const express = require('express')
const router  = express.Router()
const { isLoggedIn } = require('../middleware')
const passport = require('passport')

require('../config/passport')(passport)

// route for home page
router.get('/', (req, res, next) => {
    res.render('index') // load the index.ejs file
})

// route for showing the profile page
router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('profile', {
        user : req.user // get the user out of session and pass to template
    })
})

// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { 
  scope : 'public_profile'
}))

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }))

// route for logging out
router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('/')
})

module.exports = router
