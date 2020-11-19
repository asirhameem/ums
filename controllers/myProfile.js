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

    let fileName = req.files.dp;
    let uploadPath = 'assets/uploads/' + fileName.name;
    var user = {

        name: req.body.name,
        password: req.body.password,
        dp: uploadPath,
        email: req.session.email,
        status: req.body.status,
        type: req.body.type

    };
    //console.log(user.dp);
    profileModel.UpdateInfo(user, function(status) {
        if (status) {
            console.log(fileName);
            fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            res.redirect('/profile');

        } else {
            //res.redirect('/registration');
        }

    });
})

module.exports = router;