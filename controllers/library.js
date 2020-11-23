const express = require('express');
const libraryModel = require.main.require('./models/libraryModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/:str', (req, res) => {
    var user = {
        credential: req.params.str
    };

    libraryModel.LibraryRecordByUser(user, function(results) {
        res.send(JSON.stringify(results));
    })
});





module.exports = router;