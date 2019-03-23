const connection = require('../database/connection.js');
const addAns = (answer,consId,postId)=>connection.query(`UPDATE posts SET answer = $1 ,consultant_id = $2 where id = $3`, [answer, consId, postId]);

module.exports = addAns;
