const db = require('./db');

module.exports = {

    SearchStudentByCredential: function(user, callback) {
        var sql = "select * from user where  name = '" + user.credential + "' or email = '" + user.credential + "' or id = '" + user.credential + "'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    },
    UpdateStudentByCredential: function(user, callback) {
        var sql = "update user set status = '" + user.status + "' where email ='" + user.credential + "' or id = '" + user.credential + "' or name= '" + user.credential + "'";

        db.execute(sql, function(results) {
            callback(results);
        });
    },
    BanUserList: function(callback) {
        var sql = "select * from user where status = 'Inactive' and type = 'Student'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    }
}