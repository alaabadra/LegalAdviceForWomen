const router = require('express').Router();
const home = require('./home');
const {signupValidation,loginValidation} = require('./middleware/validation.js');
const {verifyBeforeSignup} = require('./middleware/verifyBeforeSignup.js');
const {hashPassword} = require('./middleware/hashPassword.js');
const {isUser,isConsultant,isUserLoginin,isConsLogin} = require('./middleware/isFound');
const {addUserSignup} = require('./middleware/addUserSignup.js')
router.get('/', home.get);
router.post('/signup',signupValidation,verifyBeforeSignup,isUser,isConsultant,hashPassword,addUserSignup)
router.post('/login',loginValidation,isUserLoginin,isConsLogin);
module.exports = router;


