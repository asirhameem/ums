const db = require('./db');

module.exports = {

    AccountRecordByUser: function(user, callback) {
            var sql = "select * from account where studentinfo = '" + user.credential + "'";

            db.getResults(sql, function(results) {
                callback(results);
            });
        }
        // },
        // UploadCourseContent: function(content, callback) {
        //         var sql = "insert into content values('','" + content.courseid + "', '" + content.contentname + "','" + content.contentpath + "')";
        //         db.execute(sql, function(status) {
        //             callback(status);
        //         });
        //     }
        // CourseStudents: function(course, callback) {
        //         var sql = "SELECT * FROM enroll,user WHERE enroll.studentemail = user.email and user.type = 'Student' and enroll.courseid = '" + course.courseid + "' and enroll.instructorid = '" + course.teacherid + "'";

    //         db.getResults(sql, function(results) {
    //             callback(results);
    //         });
    //     }
    // UpdateInfo: function(user, callback) {
    //     var sql = "UPDATE `user` SET `name`='" + user.name + "',`password`='" + user.password + "',`dp`='" + user.dp + "' WHERE `email`='" + user.email + "';";

    //     db.getResults(sql, function(results) {
    //         callback(results);
    //     });
    // }
}