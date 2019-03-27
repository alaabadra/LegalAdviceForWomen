const router = require('express').Router();
const home = require('./home');
const {signupValidation,loginValidation,userQInValidation} = require('./middleware/validation.js');
const {verifyBeforeSignup} = require('./middleware/verifyBeforeSignup.js');
const {hashPassword} = require('./middleware/hashPassword.js');
const {isUser,isConsultant,isUserLoginin,isConsLogin} = require('./middleware/isFound');
const {addUserSignup} = require('./middleware/addUserSignup.js');
const homeUser = require('./user/homeUser.js');
 const userMyProfile = require('./user/userMyProfile');
// const {get} = require('./user/userMyProfile');
const userPrevQ=require('./user/userPrevQ.js');
const userQIn = require('./user/userQIn.js');
const consProfile= require('./consultant/consProfile.js');
const consQuserAnsIn= require('./consultant/consQuserAnsIn.js');
router.get('/', home.get);
router.post('/signup',signupValidation,verifyBeforeSignup,isUser,isConsultant,hashPassword,addUserSignup)
// router.post('/login',loginValidation,isUserLoginin,isConsLogin);
// router.get('/homeUser',homeUser.get);
// router.get('/userPrevQ',userPrevQ.get)
// router.post('/userQIn',userQIn.get,userQInValidation,userQIn.post)
// router.get('/userMyProfile',userMyProfile.get);
// router.get('/consProfile',consProfile.get);
// router.get('/consQuserAnsIn',consQuserAnsIn.get,consQuserAnsIn.post);

module.exports = router;


