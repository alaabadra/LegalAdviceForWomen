const error = require('../error.js');
const jwt = require('jsonwebtoken');
const addPost = require('../model/addPost.js');


exports.get = (req, res) => {
    jwt.verify(req.cookie.jwt, process.env.SECRET, (err, token) => {
        if (err) return res.redirect('/');
        else {
            res.render('userQIn', {

            });
        }
    })
}

exports.post = (req, res) => {
    const { writeTitle, writeSubject } = req.body;
    addPost(writeTitle, writeSubject).then(result => {
        if (result.rows[0]) {
            return res.send({msg:'add your consultant successfully'})
        } else {
            res.send({msg:'dont add successfully , please try agin add'})
        }
    }).catch(err => error.server(err));
}