const db = require('./db');

module.exports = {

    SearchStudentByCredential: function(user, callback) {
        var sql = "select * from user where  name = '" + user.credential + "' or email = '" + user.credential + "' or uid = '" + user.credential + "'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    },
    UpdateStudentByCredential: function(user, callback) {
        var sql = "update user set status = '" + user.status + "' where email ='" + user.credential + "' or uid = '" + user.credential + "' or name= '" + user.credential + "'";
        console.log(user);
        db.execute(sql, function(results) {
            callback(results);
        });
    },
    BanUserList: function(callback) {
        var sql = "select * from user,student where user.uid = student.uid and status = 'Inactive' and type = 'Student'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    }
}