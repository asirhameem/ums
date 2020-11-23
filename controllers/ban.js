const express = require('express');
const studentModel = require.main.require('./models/studentModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/:id', (req, res) => {

    var user = {
        credential: req.params.id,
        status: "Active"
    }
    studentModel.UpdateStudentByCredential(user, function(status) {
            if (status) {
                console.log("Updated");
                res.redirect(req.get('referer'));
            }
        })
        // res.render('Home');

});

router.get('/', (req, res) => {


    studentModel.BanUserList(function(results) {
            res.render('BanUsers', { students: results })

        })
        // res.render('Home');

});





module.exports = router;