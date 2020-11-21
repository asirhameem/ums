var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function (req, res) {
	res.render('login/index');
});

router.post('/', function (req, res) {



	var user = {
		username: req.body.username,
		password: req.body.password
	}
	//console.log(user.username);
	userModel.validate(user, function (status,userid,type) {


		if (type == 1) {

			if(status){
			res.cookie('username', req.body.username);
			res.redirect('/home');	
		}else{
			res.redirect('/login');
		}

			//res.cookie('username', req.body.username);
			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
           console.log(abc);
	   //req.session.username = req.body.username;
	   //userModel.getId(username, function (result) {
		   //	console.log(result[0].userid);
		   //req.session.userid = result[0].userid;
		   //console.log(req.session.userid);

		   //console.log(req.cookie['userid']);
	   //});

			res.redirect('/studenthome');
		}

		else if (type == 2) {
				//res.cookie('username', req.body.username);
			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
   console.log(abc);
	   //req.session.username = req.body.username;
	   //userModel.getId(username, function (result) {
		   //	console.log(result[0].userid);
		   //req.session.userid = result[0].userid;
		   //console.log(req.session.userid);

		   //console.log(req.cookie['userid']);
	   //});

			res.redirect('/teacherhome');
		}

		else if (type == 3) {
				//res.cookie('username', req.body.username);
			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
   console.log(abc);
	   //req.session.username = req.body.username;
	   //userModel.getId(username, function (result) {
		   //	console.log(result[0].userid);
		   //req.session.userid = result[0].userid;
		   //console.log(req.session.userid);

		   //console.log(req.cookie['userid']);
	   //});

			res.redirect('/employeehome');
		}
		else if (type == 4) {
			//res.cookie('username', req.body.username);
			res.cookie('username',req.body.username);
			res.cookie('userid',userid);
		   var abc=req.cookies['userid'];
           console.log(abc);
	   //req.session.username = req.body.username;
	   //userModel.getId(username, function (result) {
		   //	console.log(result[0].userid);
		   //req.session.userid = result[0].userid;
		   //console.log(req.session.userid);

		   //console.log(req.cookie['userid']);
	   //});

			res.redirect('/adminhome');
		} 
		else {

			res.redirect('/login');

			
		}

	


	});
	


}); 




module.exports = router;