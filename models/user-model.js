var db = require('./db');

module.exports = {

	getId: function (username, callback) {

		var sql = "select userid from user where username='" + username + "'";
		db.getResults(sql, function (result) {

			if (result.length > 0) {
				callback(result);
			} else {
				callback([]);
			}
		});
	},
	getById: function (id, callback) {

		var sql = "select * from user where id=" + id;
		db.getResults(sql, function (result) {

			if (result.length > 0) {
				callback(result);
			} else {
				callback([]);
			}
		});
	},

	validate: function (user, callback) {
		var sql = "select * from user where username='" + user.username + "' and password='" + user.password + "'";

		db.getResults(sql, function (result) {

			if (result.length > 0) {
				callback(true,result[0].userid, result[0].type);
			} else {

				callback(false);
			}
		});
	},

	getAll: function (callback) {
		var sql = "select * from user where type= 2";

		db.getResults(sql, function (results) {

			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},

	insert: function (user, callback) {
		var sql = "insert into user values('','" + user.ename + "','" + user.cname + "','" + user.contact + "','" + user.username + "', '" + user.password + "')";
		db.execute(sql, function (status) {
			callback(status);
		});
	},
	update: function (user, callback) {
		var sql = "update user set ename='" + user.ename + "', cname='" + user.cname + "', contact='" + user.contact + "', username='" + user.username + "', password='" + user.password + "' where id=" + user.id; db.execute(sql, function (status) {
			callback(status);
		});
	},
	delete: function (id, callback) {
		var sql = "delete from user where id=" + id;
		db.execute(sql, function (status) {
			callback(status);
		});
	},

	search: function () { }
}