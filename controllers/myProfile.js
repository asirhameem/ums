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

router.post('/', [
    check('name', 'Invalid Name').exists().isLength({ min: 3 }),
    check('password', 'Invalid Password').exists().isLength({ min: 3 }),
    check('dp', 'Invalid Profile Pic').custom((val, { req }) => {
        if (req.files.dp.mimetype === 'image/jpeg') {
            return true;
        } else {
            return false;
        }
    })
], (req, res) => {

    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid Data");
        console.log(errors);
        res.redirect(req.get('referer'));
    } else {
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
    }
})

module.exports = router;