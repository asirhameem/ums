const db = require('./db');

module.exports = {

    insert: function(user, callback) {
        var sql = "INSERT INTO `user`( `name`, `email`, `password`, `type`, `dp`, `status`) VALUES ('" + user.name + "','" + user.email + "','" + user.password + "','" + user.type + "','" + user.dp + "','" + user.status + "')";
        var sql2 = "INSERT INTO `teacher`( `department`, `designation`, `salary`, `joindate`) VALUES ('" + user.department + "','" + user.designation + "','" + user.salary + "','" + user.joindate + "')";
        db.execute(sql, function(status) {
            callback(status);
        });

        db.execute(sql2, function(status) {
            callback(status);
        });
    }
}