const express = require('express');
const loginModel = require.main.require('./models/loginModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Login');
})

router.post('/', (req, res) => {

    var user = {
        email: req.body.email,
        password: req.body.password
    };
    loginModel.validate(user, function(status) {
        if (status) {
            //res.send("<h1> Login Successfull </h1>")
            req.session.email = user.email;
            res.redirect('/profile');
        } else {
            res.redirect('/login');
        }
    });
})

module.exports = router;