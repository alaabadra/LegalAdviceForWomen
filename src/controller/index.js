const router = require('express').Router();
const home = require('./home');
const {signupValidation,loginValidation,userQInValidation} = require('./middleware/validation.js');
const {verifyBeforeSignup} = require('./middleware/verifyBeforeSignup.js');
const {hashPassword} = require('./middleware/hashPassword.js');
const {isUser,isConsultant,isUserLoginin,isConsLogin} = require('./middleware/isFound');
const {addUserSignup} = require('./middleware/addUserSignup.js');
const {get} = require('./user/homeUser.js');
const {get} = require('./user/userMyProfile');
const {get} =require('./user/userPrevQ.js');
const {get,post} = require('./user/userQIn.js');
const {get} = require('./consultant/consProfile.js');
const {get,post} = require('./consultant/consQuserAnsIn.js');
router.get('/', home.get);
router.post('/signup',signupValidation,verifyBeforeSignup,isUser,isConsultant,hashPassword,addUserSignup)
router.post('/login',loginValidation,isUserLoginin,isConsLogin);
router.get('/homeUser',get);
router.get('/userPrevQ',get)
router.post('/userQIn',get,userQInValidation,post)
router.get('/userMyProfile',get);
router.get('/consProfile',get);
router.get('/consQuserAnsIn',get,post);

module.exports = router;


