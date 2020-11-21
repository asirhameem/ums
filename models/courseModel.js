const db = require('./db');

module.exports = {

    CourseDetails: function(course, callback) {
        var sql = "select * from course where courseid = '" + course.courseid + "'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    },
    CourseStudents: function(course, callback) {
            var sql = "SELECT * FROM enroll,user WHERE enroll.studentemail = user.email and user.type = 'Student' and enroll.courseid = '" + course.courseid + "' and enroll.instructorid = '" + course.teacherid + "'";

            db.getResults(sql, function(results) {
                callback(results);
            });
        }
        // UpdateInfo: function(user, callback) {
        //     var sql = "UPDATE `user` SET `name`='" + user.name + "',`password`='" + user.password + "',`dp`='" + user.dp + "' WHERE `email`='" + user.email + "';";

    //     db.getResults(sql, function(results) {
    //         callback(results);
    //     });
    // }
}