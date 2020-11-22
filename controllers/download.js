const express = require('express');
const searchModel = require.main.require('./models/searchModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');


router.get('/:str', (req, res) => {


    const file = `assets/uploads/${req.params.str}`;
    res.download(file); // Set disposition and send it.
    // res.render('Home');

});





module.exports = router;