const connection = require('../database/connection.js');
const getUser = (userName)=> connection.query(`SELECT * users WHERE user_name = $1`,[userName]);
module.exports = getUser;