//declaration
const express = require('express');
const bodyParser = require('body-parser');
const exSession = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const registration = require('./controllers/registration');
const login = require('./controllers/login');
const profile = require('./controllers/myProfile');
const homepage = require('./controllers/homepage');
const course = require('./controllers/course');
const content = require('./controllers/content');
const notice = require('./controllers/notice');
const logout = require('./controllers/logout');
const search = require('./controllers/search');
const download = require('./controllers/download');
const library = require('./controllers/library');
const student = require('./controllers/student');
const account = require('./controllers/account');
const ban = require('./controllers/ban');
// const course = require('./controllers/course');

const app = express();


//config
app.set('view engine', 'ejs');

//middleware
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(exSession({ secret: 'my secret value', saveUninitialized: true, resave: false }));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


app.use('/registration', registration);
app.use('/login', login);
app.use('/profile', profile);
app.use('/home', homepage);
app.use('/course', course);
app.use('/upload', content);
app.use('/notice', notice);
app.use('/logout', logout);
app.use('/search', search);
app.use('/download', download);
app.use('/student', student);
app.use('/library', library);
app.use('/account', account);
app.use('/ban', ban);

//route
app.get('/', (req, res) => {
    res.send('Hello from express server');
});

//server startup
app.listen(3000, (error) => {
    console.log('express server started at 3000...');
});