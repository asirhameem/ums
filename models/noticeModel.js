const db = require('./db');

module.exports = {

    NoticeByCourse: function(id, callback) {
        var sql = "select * from notice where cid = '" + id + "'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    },
    UploadCourseNotice: function(notice, callback) {
        var sql = "insert into notice values('','" + notice.id + "','" + notice.name + "', '" + notice.description + "')";
        db.execute(sql, function(status) {
            callback(status);
        });
    },
    DeleteNoticeByCourse: function(notice, callback) {
            var sql = "delete from notice where nid = '" + notice.nid + "' and cid = '" + notice.cid + "'";
            db.execute(sql, function(status) {
                callback(status);
            });
        }
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