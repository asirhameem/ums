const express = require('express');
const registrationModel = require.main.require('./models/registrationModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/', (req, res) => {
    res.render('Register', { msg: msg });
})

router.post('/', [
    check('name', 'Invalid Name').exists().isLength({ min: 2 }),
    check('email', 'Invalid Email').exists().isEmail(),
    check('password', 'Invalid Password').exists().isLength({ min: 3 }),
    check('confirmpassword', 'Invalid Confirm Password').custom((val, {
        req
    }) => {
        if (val !== req.body.password) {
            throw new Error("Passwords don't match");
        } else {
            return val;
        }
    })
], (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid Registration");
        console.log(errors);
        res.redirect(req.get('referer'));
    } else {
        var teacher = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            type: "Teacher",
            dp: "",
            status: "Inactive",
            department: "",
            designation: "",
            salary: 0,
            joindate: ""

        };
        registrationModel.insert(teacher, function(status) {
            if (status) {
                res.redirect('/login');
            } else {
                msg = "Failed to register";
                res.render('Register', { msg: msg });
            }

        });
    }
})

module.exports = router;