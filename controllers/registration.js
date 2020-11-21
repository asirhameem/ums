const express = require('express');
const registrationModel = require.main.require('./models/registrationModel');
const router = express.Router();

var msg = "";

router.get('/', (req, res) => {
    res.render('Register', { msg: msg });
})

router.post('/', (req, res) => {
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
})

module.exports = router;