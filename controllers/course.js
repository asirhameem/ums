const express = require('express');
const courseModel = require.main.require('./models/courseModel');
const homeModel = require.main.require('./models/homeModel');
const router = express.Router();
const { check, validationResult } = require('express-validator');

var msg = "";
router.get('/', (req, res) => {
    courseModel.Courses(function(results) {
        res.render('AllCourses', { courses: results })
    })
});
router.get('/mycourse', (req, res) => {
    var user = {
        userid: req.session.userid
    };
    homeModel.LoadSubjects(user, function(results) {
        res.render('MyCourses', { courses: results })
    })
});
router.get('/:id', (req, res) => {
    var course = {
        courseid: req.params.id,
        teacherid: req.session.userid
    };

    courseModel.CourseDetails(course, function(results) {
        var courseDetails = results;
        courseModel.CourseStudents(course, function(result) {
            var courseStudents = result;

            res.render('CourseDetails', { details: courseDetails, students: courseStudents });
        })

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



module.exports = router;