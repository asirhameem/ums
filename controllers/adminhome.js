var express = require('express');
var db = require('./../models/db.js');
var router = express.Router();



router.get('/', (req, res)=>{
	
	if(req.cookies['username'] != null){
		res.render('adminhome/index');
	}else{
		res.redirect('/login');
	}
});

module.exports = router;