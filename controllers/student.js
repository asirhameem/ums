const express = require('express');
const studentModel = require.main.require('./models/studentModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/:str', (req, res) => {

    var user = {
        credential: req.params.str
    };
    studentModel.SearchStudentByCredential(user, function(results) {
        res.render('StudentProfile', { user: results });
    })

    // res.render('Home');

});

router.post('/:str', [
    check('status', 'Invalid Status').exists()
], (req, res) => {

    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
    } else {
        var user = {
            credential: req.params.str,
            status: req.body.status
        };
        studentModel.UpdateStudentByCredential(user, function(results) {
            res.redirect(req.get('referer'));
        })
    }
    // res.render('Home');

});






module.exports = router;