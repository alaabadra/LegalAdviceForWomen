const connection = require('../database/connection.js');
const getCons = (userName)=> connection.query(`SELECT * consultant WHERE user_name = $1`,[userName]);
module.exports = getCons;