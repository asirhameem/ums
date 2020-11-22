const express = require('express');
const searchModel = require.main.require('./models/searchModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/:str', (req, res) => {


    searchModel.SearchStudent(function(results) {
        const result = results.filter(user => user.id == req.params.str ||
            user.name.toLowerCase() == req.params.str.toLowerCase() || user.email == req.params.str);
        console.log(result);
        res.render('Search', { contents: result });
    })

    // res.render('Home');

});





module.exports = router;