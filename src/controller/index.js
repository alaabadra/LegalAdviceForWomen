const router = require('express').Router();
const home = require('./home');
const {validation} = require('./middleware/validation.js');
const {cookie} = require('./middleware/cookie.js');
const {auth} = require('./middleware/authuntication.js');
const {hashPasword} = require('./middleware/hashPassword.js');
router.get('/', home.get);
// router.post('/signup',validation,token,auth,hashPasword)

module.exports = router;
