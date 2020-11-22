const express = require('express');
const homeModel = require.main.require('./models/homeModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/', (req, res) => {
    var user = {
        userid: req.session.userid
    };
    homeModel.LoadSubjects(user, function(results) {
        res.render('Home', { subjects: results });
    })

    // res.render('Home');

});

// router.post('/', (req, res) => {

//     let fileName = req.files.dp;
//     let uploadPath = 'assets/uploads/' + fileName.name;
//     var user = {

//         name: req.body.name,
//         password: req.body.password,
//         dp: uploadPath,
//         email: req.body.email


//     };
//     console.log(uploadPath);
//     profileModel.UpdateInfo(user, function(status) {
//         if (status) {
//             //console.log(fileName);
//             fileName.mv(uploadPath, (err) => {
//                 if (err) {
//                     return res.status(500).send(err);
//                 }
//             });
//             res.redirect('/profile');

//         } else {
//             msg = "Can not Update";
//             res.render('MyProfile', { msg: msg });
//         }

//     });
// });

router.get('/navbar', (req, res) => {

    res.render('navbar');

})

router.post('/navbar', (req, res) => {

    res.render('navbar');

})
module.exports = router;