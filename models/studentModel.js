const db = require('./db');

module.exports = {

    SearchStudentByCredential: function(user, callback) {
        var sql = "select * from user where  name = '" + user.credential + "' or email = '" + user.credential + "' or id = '" + user.credential + "'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    }
}