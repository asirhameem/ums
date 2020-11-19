const express = require('express');
const loginModel = require.main.require('./models/loginModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');
var msg = '';
router.get('/', (req, res) => {
    res.render('Login', { msg: msg });
})

router.post('/', [
    check('email', 'Invalid Email')
    .exists()
    .isLength({ min: 12 }),
    check('password', 'Invalid Password')
    .exists()
    .isLength({ min: 3 })
], (req, res) => {

    var user = {
        email: req.body.email,
        password: req.body.password
    };


    loginModel.validate(user, function(status) {
        if (status) {

            req.session.email = user.email;
            res.redirect('/profile');
        } else {

            msg = "Unauthorized";
            res.render('Login', { msg: msg });

        }
    });
})

module.exports = router;