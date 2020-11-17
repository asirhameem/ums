const express = require('express');
const profileModel = require.main.require('./models/profileModel');
const router = express.Router();

router.get('/', (req, res) => {
    var user = {
        email: req.session.email
    };
    profileModel.ProfileInfo(user, function(results) {
        res.render('MyProfile', { user: results });
    });
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
    profileModel.insert(user, function(status) {
        if (status) {
            res.redirect('/login');
        } else {
            res.redirect('/registration');
        }

    });
})

module.exports = router;