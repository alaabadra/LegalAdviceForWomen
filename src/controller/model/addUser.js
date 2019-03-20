const connection = require('../database/connection.js');
const addUser=(userName,password)=> connection.query(`INSERT INTO users values ($1,$2) returning *`,[userName,password]);
module.exports = addUser;