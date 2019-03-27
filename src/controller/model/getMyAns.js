const connection  = require ('../database/connection.js');
const getMyAns = ()=>connection.query(`SELECT posts.title , posts.content  ,posts.answer, users.full_name from posts JOIN users ON users.id = posts.consultant_id`);
module.exports = getMyAns;