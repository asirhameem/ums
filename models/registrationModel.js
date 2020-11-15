const db = require('./db');

module.exports = {

    insert: function(user, callback) {
        var sql = "INSERT INTO `user`( `name`, `email`, `password`, `type`, `dp`, `status`) VALUES ('" + user.name + "','" + user.email + "','" + user.password + "','" + user.type + "','" + user.dp + "','" + user.status + "')";

        db.execute(sql, function(status) {
            callback(status);
        });
    }
}