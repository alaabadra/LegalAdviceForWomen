const error = require('../error.js');
const jwt = require('jsonwebtoken');
const getMyPosts = require('../model/getMyPosts.js');


exports.get = (req, res) => {
    jwt.verify(req.cookie.jwt, process.env.SECRET, (err, token) => {
        if (err) res.redirect('/');
        else {


            res.render('userHome', {

            })


        }
    })
}


