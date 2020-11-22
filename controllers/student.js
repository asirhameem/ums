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





module.exports = router;