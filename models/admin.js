var db = require('./db');

module.exports={

	getById: function(id, callback){
console.log(id);

	console.log(id);
			var sql = "select user.userid, user.username , user.email, user.phone,user.password, user.gender, user.city, student.fullname,student.department,student.cgpa,student.dob,student.addmissiondate  FROM user join student on user.userid='"+id+"'  and student.userid='"+id+"' " ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},


	
		getupdate: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from user where userid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},
				
		
	
	
	getstudent : function(callback){
		var sql = "select * from user where type= 1";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getprofile : function(callback){
		var sql = "select * from user where type= 4";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	


	
	update : function(user, callback){
		
		var sql = "update user set username='" + user.username + "', email='" + user.email + "', phone='" + user.phone + "', password='" + user.password + "', gender='" + user.gender + "', city='" + user.city + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	
	
	getteacher : function(callback){
		var sql = "select * from user where type= 2";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	getemployee : function(callback){
		var sql = "select * from user where type= 3";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},


	
    searchstudent: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from user where username like '%" +user.ename+"%' and type=1";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},
	studentupdate : function(user, callback){
		
		var sql = "update student set  fullname='" + user.fullname + "', department='" + user.department + "', addmissiondate='" + user.addmissiondate + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			 console.log(status);
			callback(status);
		});
	},

				searchteacher: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from user where username like '%" +user.ename+"%' and type=2";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},

				searchemployee: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from user where username like '%" +user.ename+"%' and type=3";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},

			studentdelete : function(id, callback){
	    var sql = "delete from user where userid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

	addstudent: function(user, callback){

		var sql = "insert into user values('','" + user.username + "', '" + user.email + "', '" + user.phone + "', '" + user.password + "', '" + user.gender + "', '" + user.city + "', '1')";
		db.execute(sql, function(status){
			callback(status);
			
		});

		
	},

	
getlibrary : function(callback){
		var sql = "select * from library ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	 searchbook: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from library where bookname like '%" +user.ename+"%' ";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},

	getByIdBook: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from library where bookname='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},
		// select library.bookid, library.bookname , library.authorname, library.bookdes


		getByIdmassage: function(id, callback){
        console.log(id);
        
            console.log(id);
                    var sql = "select * from message where receiverid="+id; 
                    db.getResults(sql, function(result){
                        
                        if( result.length > 0 ){
                            
                            callback(result);
            
                        }else{
                            callback("");
                        }
                    });
                },

    message : function(user, callback){
	    var sql = "insert into message values('','" + user.userid + "','" +user.id + "','" + user.message + "')";
		db.execute(sql, function(status){
			callback(status);
		});
	},

	getmessage : function(callback){
					var sql = "select * from message";
			
					db.getResults(sql, function(results){
						
						if(results.length > 0 ) {
							callback(results);
						}else{
							callback([]);
						}
					});
				},

				getcourse : function(callback){
		var sql = "select * from course  ";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},

	 searchcourse: function(user, callback){
					console.log(user.ename);
			
					var sql = "select * from course where coursename like '%" +user.ename+"%' ";
					db.getResults(sql, function(result){
			
						if(result.length > 0 ){
							callback(result);
						}else{
							callback([]);
						}
					});
				},

					getByIdcourse: function(id, callback){
             console.log(id);

	          console.log(id);
			var sql = "select * from course where courseid='"+id+"'" ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

			insertcourse: function(course, callback){
		     var sql = "insert into course VALUES ('', '"+course.coursename+"' , '"+course.coursecost+"' , '"+course.coursestatus+"','"+course.capacity+"','"+course.section+"','"+course.starttime+"','"+course.endtime+"')";
		
		//console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},

	getupdatecourse: function(id, callback){
			console.log(id);
			
				console.log(id);
						var sql = "select * from course where courseid='"+id+"' " ; 
						db.getResults(sql, function(result){
							
							if( result.length > 0 ){
								
								callback(result);
				
							}else{
								callback([]);
							}
						});
					},

		updatecourse : function(course, callback){
		
          var sql = "update course set  coursename='" + course.coursename + "', coursecost='" + course.coursecost + "', coursestatus='" + course.coursestatus + "', capacity='" + course.capacity + "',section='" + course.section + "' ,starttime='" + course.starttime + "' ,endtime='" + course.endtime + "' where courseid=" + course.id;

		 db.execute(sql, function (status) {
			callback(status);
		});
	},

	
		coursedelete : function(id, callback){
	    var sql = "delete from course where courseid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},	

	getByIdTeacher: function(id, callback){
console.log(id);

	console.log(id);
			var sql = "select user.userid, user.username , user.email, user.phone,user.password,  user.gender, user.city, teacher.fullname,teacher.department,teacher.desig,teacher.salary,teacher.joindate  FROM user join teacher on user.userid='"+id+"'  and teacher.userid='"+id+"' " ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		teacherupdate : function(user, callback){
		
		var sql = "update teacher set  fullname='" + user.fullname + "', department='" + user.department + "', desig='" + user.desig + "', salary='" + user.salary + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			 console.log(status);
			callback(status);
		});
	},	
		


		
			teacherdelete : function(id, callback){
	    var sql = "delete from user where userid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

	addteacher: function(user, callback){

		var sql = "insert into user values('','" + user.username + "', '" + user.email + "', '" + user.phone + "', '" + user.password + "', '" + user.gender + "', '" + user.city + "', '2')";
		db.execute(sql, function(status){
			callback(status);
			
		});

		
	},

	getByIdEmployee: function(id, callback){
console.log(id);

	console.log(id);
			var sql = "select user.userid, user.username , user.email, user.phone,user.password, user.gender, user.city, employee.fullname,employee.department,employee.desig,employee.salary,employee.joindate  FROM user join employee on user.userid='"+id+"'  and employee.userid='"+id+"' " ; 
			db.getResults(sql, function(result){
				
				if( result.length > 0 ){
					
					callback(result);
	
				}else{
					callback([]);
				}
			});
		},

		employeeupdate : function(user, callback){
		
		var sql = "update employee set  fullname='" + user.fullname + "', department='" + user.department + "', desig='" + user.desig + "', salary='" + user.salary + "', joindate='" + user.joindate + "' where userid=" + user.id;

		 db.execute(sql, function (status) {
			 console.log(status);
			callback(status);
		});
	},	

	employeedelete : function(id, callback){
	    var sql = "delete from user where userid="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	},

	addemployee: function(user, callback){

		var sql = "insert into user values('','" + user.username + "', '" + user.email + "', '" + user.phone + "', '" + user.password + "', '" + user.gender + "', '" + user.city + "', '3')";
		db.execute(sql, function(status){
			callback(status);
			
		});

		
	},


	

}