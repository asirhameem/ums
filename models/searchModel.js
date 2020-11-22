const db = require('./db');

module.exports = {

    SearchStudent: function(callback) {
        var sql = "select * from user where type = 'Student'";

        db.getResults(sql, function(results) {
            callback(results);
        });
    }
}