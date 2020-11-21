const express = require('express');
const profileModel = require.main.require('./models/profileModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/', (req, res) => {
    var user = {
        email: req.session.email
    };
    profileModel.ProfileInfo(user, function(results) {
        //console.log(results);
        res.render('MyProfile', { user: results });
    });
})

router.post('/', (req, res) => {

    let fileName = req.files.dp;
    let uploadPath = 'assets/uploads/' + fileName.name;
    var user = {

        name: req.body.name,
        password: req.body.password,
        dp: uploadPath,
        email: req.body.email


    };
    console.log(uploadPath);
    profileModel.UpdateInfo(user, function(status) {
        if (status) {
            //console.log(fileName);
            fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            res.redirect('/profile');

        } else {
            msg = "Can not Update";
            res.render('MyProfile', { msg: msg });
        }

    });
})

module.exports = router;