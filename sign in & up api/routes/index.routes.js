const express = require('express'),
    passport = require('passport'),
    jwt = require('jsonwebtoken');



const router = express.Router();


router.post('/login', async(req, res, next) => {
   
    if (!req.body.username) {
        console.log('in username');
        return res.status(500).send({
            message: "username is required"
        });

    }
    if (!req.body.password) {
        console.log("in password");
        return res.status(500).send({
            message: "password is required"
        });
    }
    try{
        console.log(req.body.username);
        console.log(req.body.password);
    passport.authenticate('login', async(err, user, info) => {
        try {
            console.log('in try');
            if (err || !user) {
                 
                const error = new Error('An Error occured');
                return res.status(400).send({
                    message:err
                })
                // return next(error);
            }
            req.login(user, { session: false }, async(error) => {
                if (error) return next(error)
                    //We don't want to store the sensitive information such as the
                    //user password in the token so we pick only the email and id
                const body = { _id: user._id, username: user.username };
                //Sign the JWT token and populate the payload with the user email and id
                const token = jwt.sign({ user: body }, 'top_secret');
                //Send back the token to the user
                return res.json({ token });
            });
        } catch (error) {
            console.log('in catch')
            return next(error);
        }
    })(req, res, next);
}
catch(err){

    
        return res.send({
            message:"elese"
        })
    
}
});



module.exports = router;