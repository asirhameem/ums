const db = require('./db');

module.exports = {

    ProfileInfo: function(user, callback) {
        var sql = "select * from user where email = '" + user.email + "'";

        db.getResults(sql, function(status) {
            callback(status);
        });
    },
    UpdateInfo: function(user, callback) {
        var sql = "UPDATE `user` SET `name`='" + user.name + "',`password`='" + user.password + "',`dp`='" + user.dp + "' WHERE `email`='" + req.session.email + "';";

        db.getResults(sql, function(status) {
            callback(status);
        });
    }
}