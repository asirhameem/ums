const db = require('./db');

module.exports = {

    LoadSubjects: function(user, callback) {
            var sql = "select * from course where courseteacher = '" + user.userid + "'";

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