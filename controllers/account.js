const express = require('express');
const accountModel = require.main.require('./models/accountModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/:str', (req, res) => {
    var user = {
        credential: req.params.str
    };

    accountModel.AccountRecordByUser(user, function(results) {
        res.send(results);
    })
});





module.exports = router;
