const express = require('express');
const contentModel = require.main.require('./models/contentModel');
const noticeModel = require.main.require('./models/noticeModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/:id', (req, res) => {


    noticeModel.NoticeByCourse(req.params.id, function(results) {
        const noticeList = results;
        res.render('CourseNotice', { notices: results });
    })

    // res.render('Home');

});

router.post('/:id', [
    check('noticename', 'Invalid Notice').exists().isLength({ min: 2 }),
    check('noticedescription', 'Invalid Notice Description').exists().isLength({ min: 5 })
], (req, res) => {

    var errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log("Validation Failed");
        console.log(errors);
        res.redirect(req.get('referer'));


    } else {
        var notice = {
            name: req.body.noticename,
            description: req.body.noticedescription,
            id: req.params.id
        }

        noticeModel.UploadCourseNotice(notice, function(status) {
            if (status) {
                noticeModel.NoticeByCourse(req.params.id, function(results) {
                    res.render('CourseNotice', { notices: results });
                })
            }
        })
    }
});

router.get('/:cid/:nid', (req, res) => {

    var notice = {
        nid: req.params.nid,
        cid: req.params.cid
    };

    noticeModel.DeleteNoticeByCourse(notice, function(results) {
        console.log(notice);
        res.redirect(req.get('referer'));


    })

    // res.render('Home');

});





module.exports = router;