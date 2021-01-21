const express = require('express');
const loginModel = require.main.require('./models/loginModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');
var msg = '';
router.get('/', (req, res) => {
    res.render('Login', { msg: msg });
})

router.post('/', [
    check('email', 'Invalid Email').exists().isEmail(),
    check('password', 'Invalid Password').exists().isLength({ min: 3 })
], (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid Login");
        console.log(errors);
        res.redirect(req.get('referer'));
    } else {

        var user = {
            email: req.body.email,
            password: Buffer.from(req.body.password).toString('base64') // req.body.password 
        };


        loginModel.validate(user, function(status) {
            if (status) {
                loginModel.getByEmail(user, function(results) {
                    if (results[0].type == "Student") {
                        req.session.email = user.email;
                        req.session.userid = results[0].uid;
                        req.session.username = results[0].username;
                        res.redirect('/studenthome');
                    } else if (results[0].type == "Teacher") {
                        req.session.email = user.email;
                        req.session.userid = results[0].uid;
                        req.session.username = results[0].username;
                        console.log(results[0]);
                        res.redirect('/home');
                    } else if (results[0].type == "Admin") {
                        req.session.email = user.email;
                        req.session.userid = results[0].id;
                        req.session.username = results[0].username;
                        res.redirect('/adminhome');
                    } else if (results[0].type == "Employee") {
                        req.session.email = user.email;
                        req.session.userid = results[0].id;
                        req.session.username = results[0].username;
                        res.redirect('/employeehome');
                    }

                })
            } else {

                msg = "Unauthorized";
                res.render('Login', { msg: msg });

            }
        });
    }
})

module.exports = router;