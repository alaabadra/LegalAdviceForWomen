const connection = require('../database/connection.js');
const getPosts = ()=>connection.query(`SELECT posts.title , posts.content , posts.answer , users.user_name from posts JOIN users ON users.id = posts.user_id`);
module.exports = getPosts;