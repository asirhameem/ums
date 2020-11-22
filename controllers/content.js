const express = require('express');
const contentModel = require.main.require('./models/contentModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";

router.get('/:id', (req, res) => {
    var course = {
        courseid: req.params.id
    };

    contentModel.ContentByCourse(course, function(results) {
        var arr = [];
        var arr2 = [];
        for (var i = 0; i < results.length; i++) {
            arr = results[i].contentpath.split('/');
            arr2.push(arr[3]);
            if (i == results.length - 1) {
                res.render('CourseContent', { contents: results, fname: arr2 });
            }

        }
    })

    // res.render('Home');

});

router.post('/:id', (req, res) => {

    let fileName = req.files.material;
    let uploadPath = 'assets/uploads/contents/' + fileName.name;
    var content = {

        contentname: req.body.fileName,
        contentpath: uploadPath,
        courseid: req.params.id
    };
    console.log(uploadPath);
    contentModel.UploadCourseContent(content, function(status) {
        if (status) {
            //console.log(fileName);
            fileName.mv(uploadPath, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            res.redirect(req.get('referer'));

        } else {
            msg = "Can not Update";
            res.redirect(req.get('referer'));
        }

    });
});



module.exports = router;