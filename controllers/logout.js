const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

// router.post('/', [
//     check('email', 'Invalid Email').exists().isEmail(),
//     check('password', 'Invalid Password').exists().isLength({ min: 3 })
// ], (req, res) => {
//     var errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         console.log("Invalid Login");
//         console.log(errors);
//         res.redirect(req.get('referer'));
//     } else {

//         var user = {
//             email: req.body.email,
//             password: req.body.password
//         };


//         loginModel.validate(user, function(status) {
//             if (status) {
//                 loginModel.getByEmail(user, function(results) {
//                     req.session.email = user.email;
//                     req.session.userid = results[0].id;
//                     res.redirect('/home');

//                 })
//             } else {

//                 msg = "Unauthorized";
//                 res.render('Login', { msg: msg });

//             }
//         });
//     }
// })

module.exports = router;