const express = require('express')
const router  = express.Router()
const { isLoggedIn } = require('../middleware')
const userController = require('../controllers/userController')

// route for home page
router.get('/', userController.index)

// route for showing the profile page
router.get('/profile', isLoggedIn, userController.profileGet)

// route for facebook authentication and login
router.get('/auth/facebook', userController.authFacebookGet)

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback', userController.authFacebookCallbackGet)

// route for logging out
router.get('/logout', userController.logoutGet)

module.exports = router
