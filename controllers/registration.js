const express = require('express');
const registrationModel = require.main.require('./models/registrationModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Register');
})

router.post('/', (req, res) => {
    var user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        type: "Teacher",
        dp: "",
        status: "Inactive"
    };
    registrationModel.insert(user, function(status) {
        if (status) {
            res.redirect('/login');
        } else {
            res.redirect('/registration');
        }

    });
})

module.exports = router;