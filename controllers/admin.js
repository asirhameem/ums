var express = require('express');
var db = require('./../models/db.js');

var userModel = require('./../models/admin');




var router = express.Router();

//Admin 
router.get('/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});

router.get('/studentinfo/admin/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});

router.get('/admin/admin/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});

router.get('/admin/studentinfo/admin/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});

router.get('/admin/profile', function(req, res){

	userModel.getprofile(function(results){

		res.render('admin/profile', {user: results});		
	});

});

router.get('/update/:id', function(req, res){

	userModel.getupdate(req.params.id, function(results){
		res.render('admin/updateprofile', {user: results});		
	});

});

router.post('/update/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		phone: req.body.phone,
		password: req.body.password,
		email: req.body.email,
		gender: req.body.gender,
		city: req.body.city,
		id: req.params.id
	};
	userModel.update(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/profile');
		}else{
			res.redirect('/adminhome');
		}
	});
});


//student

router.get('/admin/student', function(req, res){

	userModel.getstudent(function(results){

		res.render('admin/student', {user: results});		
	});

});

router.get('/admin/admin/student', function(req, res){

	userModel.getstudent(function(results){

		res.render('admin/student', {user: results});		
	});

});

router.get('/admin/studentinfo/admin/student', function(req, res){

	userModel.getstudent(function(results){

		res.render('admin/student', {user: results});		
	});

});

router.get('/student', function(req, res){

		userModel.getstudent(function(results){
			
				res.render('admin/student', {user: results});
			
		});
});

router.post('/searchstudent', function(req, res){
	console.log('rted at 3000...');
	var user={
		ename:req.body.search
	}
	console.log(user.ename);
	userModel.searchstudent(user, function(results){

		res.render('search/studentsearch', {user: results});
	});
});

router.get('/studentinfo/:id', function(req, res){

	userModel.getById(req.params.id, function(results){

		res.render('admin/studentinfo', {user: results});		
	});

});

router.get('/admin/studentinfo/:id', function(req, res){

	userModel.getById(req.params.id, function(results){

		res.render('admin/studentinfo', {user: results});		
	});

});

router.get('/studentupdate/:id', function(req, res){

	userModel.getById(req.params.id, function(results){
		res.render('admin/studentupdate', {user: results});		
	});

});

router.post('/studentupdate/:id', function(req, res){
	
	var user = {
		
		//email: req.body.email,
		//phone: req.body.phone,
		//city: req.body.city,
		fullname: req.body.fullname,
		department: req.body.department,
		addmissiondate: req.body.addmissiondate,
		id: req.params.id
	};
	userModel.studentupdate(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/adminhome'); 
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/studentdelete/:id', function(req, res){

	userModel.studentdelete(req.params.id, function(status){
		if(status){
			res.redirect('/adminhome');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addstudent', (req, res)=>{
	res.render('admin/addstudent'); 
})

router.post('/addstudent', (req, res)=>{

	var user = {
		//id: req.cookies.userid,
		username: 	req.body.username,
		email:   	req.body.email,
		phone	:  	req.body.phone,
		Password: 	req.body.Password,
		gender: 	req.body.gender,
		city	: 	req.body.city,
		fullname: 	req.body.fullname,
		department: req.body.department,
		cgpa	: 	req.body.cgpa,
		dob: 	    req.body.dob,
		addmissiondate: 	req.body.addmissiondate
		
	}
	console.log(user.username, user.email,  user.phone, user.password, user.gender,user.city);
	userModel.addstudent(user, function(status){
		if(status){
			var sql = "select userid from user where phone="+user.phone;
			db.getResults(sql, function(results){
				console.log(results[0].userid);
				var sql =" insert into student values('','" + results[0].userid + "', '" + user.fullname + "', '" + user.department + "' ,'" + user.cgpa + "','" + user.dob + "','" + user.addmissiondate + "'  )";
				db.execute(sql, function(status){
					if(status){
						res.redirect('/admin/student');
						} else{}
						});
					});	
			}else{
				res.send('problem to add student');
				}
	});

});








		

router.get('/message/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		res.render('admin/message', {user: result});
	});
});

router.post('/message/:id', function(req, res){
	userModel.getprofile(function(results){
console.log(results[0].userid);
var user = {
		
	message: req.body.message,
	userid: results[0].userid,
	id: req.params.id
};
	userModel.message(user, function(status){
		if(status){
			res.redirect('/adminhome');
		}else{
			res.redirect('/logout');
		}
	});
});
});

router.get('/message', function(req, res){

    userModel.getmessage(function(results){
		
		
            res.render('history/message', {user:results});
        
    });
});

//teacher

router.get('/admin/teacher', function(req, res){

	userModel.getteacher(function(results){

		res.render('admin/teacher', {user: results});		
	});

});

router.get('/admin/admin/teacher', function(req, res){

	userModel.getstudent(function(results){

		res.render('admin/teacher', {user: results});		
	});

});

router.get('/teacher', function(req, res){

	userModel.getteacher(function(results){
		
			res.render('admin/teacher', {user: results});
		
	});
});

router.post('/searchteacher', function(req, res){
	console.log('rted at 3000...');
	var user={
		ename:req.body.search
	}
	console.log(user.ename);
	userModel.searchteacher(user, function(results){

		res.render('search/teachersearch', {user: results});
	});
});

router.get('/teacherinfo/:id', function(req, res){

	userModel.getByIdTeacher(req.params.id, function(results){

		res.render('admin/teacherinfo', {user: results});		
	});

});

router.get('/teacherupdate/:id', function(req, res){

	userModel.getByIdTeacher(req.params.id, function(results){
		res.render('admin/teacherupdate', {user: results});		
	});

});

router.post('/teacherupdate/:id', function(req, res){
	
	var user = {
		
		
		fullname: req.body.fullname,
		department: req.body.department,
		desig: req.body.desig,
		salary: req.body.salary,
		id: req.params.id
	};
	userModel.teacherupdate(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/teacher'); 
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/teacherdelete/:id', function(req, res){

	userModel.teacherdelete(req.params.id, function(status){
		if(status){
			res.redirect('/admin/teacher');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addteacher', (req, res)=>{
	res.render('admin/addteacher'); 
})

router.post('/addteacher', (req, res)=>{

	var user = {
		//id: req.cookies.userid,
		username: 	req.body.username,
		email:   	req.body.email,
		phone	:  	req.body.phone,
		Password: 	req.body.Password,
		gender: 	req.body.gender,
		city	: 	req.body.city,

		fullname: 	req.body.fullname,
		department: req.body.department,
		desig	: 	req.body.desig,
		salary: 	    req.body.salary,
		jointdate: 	req.body.jointdate
		
	}
	console.log(user.username, user.email,  user.phone, user.password, user.gender,user.city);
	userModel.addteacher(user, function(status){
		if(status){
			var sql = "select userid from user where phone="+user.phone;
			db.getResults(sql, function(results){
				console.log(results[0].userid);
				var sql =" insert into teacher values('','" + results[0].userid + "', '" + user.fullname + "', '" + user.department + "' ,'" + user.desig + "','" + user.salary + "','" + user.jointdate + "'  )";
				db.execute(sql, function(status){
					if(status){
						res.redirect('/admin/teacher');
						} else{}
						});
					});	
			}else{
				res.send('problem to add teacher');
				}
	});

});





//employee

router.get('/admin/employee', function(req, res){

	userModel.getemployee(function(results){

		res.render('admin/employee', {user: results});		
	});

});

router.get('/admin/admin/employee', function(req, res){

	userModel.getstudent(function(results){

		res.render('admin/employee', {user: results});		
	});

});



router.get('/employee', function(req, res){

	userModel.getemployee(function(results){
		
			res.render('admin/employee', {user: results});
		
	});
});

router.post('/searchemployee', function(req, res){
	console.log('rted at 3000...');
	var user={
		ename:req.body.search
	}
	console.log(user.ename);
	userModel.searchemployee(user, function(results){

		res.render('search/employeesearch', {user: results});
	});
});

router.get('/employeeinfo/:id', function(req, res){

	userModel.getByIdEmployee(req.params.id, function(results){

		res.render('admin/employeeinfo', {user: results});		
	});

});

router.get('/employeeupdate/:id', function(req, res){

	userModel.getByIdEmployee(req.params.id, function(results){
		res.render('admin/employeeupdate', {user: results});		
	});

});

router.post('/employeeupdate/:id', function(req, res){
	
	var user = {
		
		
		fullname: req.body.fullname,
		department: req.body.department,
		desig: req.body.desig,
		salary: req.body.salary,
		jointdate: req.body.jointdate,
		id: req.params.id
	};
	userModel.employeeupdate(user, function(status){
		console.log(status);
		if(status){
			res.redirect('/admin/employee'); 
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/employeedelete/:id', function(req, res){

	userModel.employeedelete(req.params.id, function(status){
		if(status){
			res.redirect('/admin/employee');
		}else{
			res.redirect('/adminhome');
		}
	});
});

router.get('/addemployee', (req, res)=>{
	res.render('admin/addemployee'); 
})

router.post('/addemployee', (req, res)=>{

	var user = {
		//id: req.cookies.userid,
		username: 	req.body.username,
		email:   	req.body.email,
		phone	:  	req.body.phone,
		Password: 	req.body.Password,
		gender: 	req.body.gender,
		city	: 	req.body.city,

		fullname: 	req.body.fullname,
		department: req.body.department,
		desig	: 	req.body.desig,
		salary: 	    req.body.salary,
		jointdate: 	req.body.jointdate
		
	}
	console.log(user.username, user.email,  user.phone, user.password, user.gender,user.city);
	userModel.addemployee(user, function(status){
		if(status){
			var sql = "select userid from user where phone="+user.phone;
			db.getResults(sql, function(results){
				console.log(results[0].userid);
				var sql =" insert into employee values('','" + results[0].userid + "', '" + user.fullname + "', '" + user.department + "' ,'" + user.desig + "','" + user.salary + "','" + user.jointdate + "'  )";
				db.execute(sql, function(status){
					if(status){
						res.redirect('/admin/employee');
						} else{}
						});
					});	
			}else{
				res.send('problem to add employee');
				}
	});

});







//library

router.get('/library', function(req, res){

    userModel.getlibrary(function(results){
			
				res.render('admin/library', {library: results});
			
		});
});

router.post('/searchbook', function(req, res){
	console.log('rted at 3000...');
	var user={
		ename:req.body.search
	}
	console.log(user.ename);
	userModel.searchbook(user, function(results){

		res.render('search/booksearch', {library: results});
	});
});

router.get('/bookinfo/:id', function(req, res){

	userModel.getByIdBook(req.params.id, function(results){

		res.render('admin/bookinfo', {library: results});		
	});

});

//add course

router.get('/addcourse', function(req, res){

		userModel.getcourse(function(results){
			
				res.render('addcourse/courseview', {course: results});
			
		});
});

router.post('/searchcourse', function(req, res){
	console.log('rted at 3000...');
	var user={
		ename:req.body.search
	}
	console.log(user.ename);
	userModel.searchcourse(user, function(results){

		res.render('search/coursesearch', {course: results});
	});
});

router.get('/addcourse/courseinfo/:id', function(req, res){

	userModel.getByIdcourse(req.params.id, function(results){

		res.render('addcourse/courseinfo', {course: results});		
	});

});




module.exports = router;
