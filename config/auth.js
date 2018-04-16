// expose our config directly to our application using module.exports
module.exports = {
    'facebookAuth' : {
        'clientID'      : process.env.FB_APP_ID, // your App ID
        'clientSecret'  : process.env.FB_APP_SECRET, // your App Secret
        'callbackURL'   : 'https://localhost:3000/auth/facebook/callback',
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name',
        'profileFields' : ['id', 'name'] // For requesting permissions from Facebook API
    }
};
