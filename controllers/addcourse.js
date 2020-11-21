var express = require('express');
var db = require('./../models/db.js');
var userModel = require('./../models/admin');


var router = express.Router();

router.get('/courseinfo/:id', function(req, res){

	userModel.getByIdcourse(req.params.id, function(results){

		res.render('addcourse/courseinfo', {course: results});		
	});

});

router.get('/course', function(req, res){

   res.render('addcourse/course');
});

router.post('/course', (req, res)=>{

	var course = {
		coursename: req.body.coursename,
		coursecost: req.body.coursecost,
		coursestatus: req.body.coursestatus,
		capacity: req.body.capacity,
		section: req.body.section,
		starttime: req.body.starttime,
		endtime: req.body.endtime
	};

	userModel.insertcourse(course, function(status){
		if(status){
			res.redirect('/admin/addcourse');
		}else{
			res.redirect('/admin/addcourse');
		}
	});
});

router.get('/addcourse/addcourse/updatecourse/:id', function(req, res){

	userModel.getupdatecourse(req.params.id, function(results){
		res.render('addcourse/updatecourse', {course: results});		
	});

});

router.post('/addcourse/addcourse/updatecourse/:id', function(req, res){
	
	var course = {
		coursename: req.body.coursename,
		coursecost: req.body.coursecost,
		coursestatus: req.body.coursestatus,
		capacity: req.body.capacity,
		section: req.body.section,
		starttime: req.body.starttime,
		endtime: req.body.endtime,

		
		id: req.params.id
	};
	userModel.updatecourse(course, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/addcourse');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addcourse/addcourse/deletecourse/:id', function(req, res){

	userModel.coursedelete(req.params.id, function(status){
		if(status){
			res.redirect('/admin/addcourse');
		}else{
			res.redirect('/adminhome');
		}
	});
});
 


module.exports = router;
