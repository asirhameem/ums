//declaration
const express 		= require('express');
const bodyParser 	= require('body-parser');
const exSession 	= require('express-session');
const cookieParser 	= require('cookie-parser');

var login = require('./controllers/login');
var adminhome = require('./controllers/adminhome');
var admin = require('./controllers/admin');
var addcourse = require('./controllers/addcourse')
var logout = require('./controllers/logout');

const path = require('path');
const app 			= express();


//config
app.set('view engine', 'ejs');

//middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());

app.use('/login', login);
app.use('/adminhome', adminhome);
app.use('/admin', admin);
app.use('/addcourse', addcourse);
app.use('/logout', logout);

app.use(express.static(path.join(__dirname, 'public')));


//route
app.get('/', (req, res)=>{
	res.send('Hello from express server');	
});

//server startup
app.listen(3000, (error)=>{
	console.log('express server started at 3000...');
});