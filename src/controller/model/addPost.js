const connection = require('../database/connection.js');
const addPost = (title,content,userId)=>connection.query(`INSERT INTO posts (title, content ,userId) vlaues ($1,$2,$3) returning *`,[title,content,userId]);
module.exports = addPost;