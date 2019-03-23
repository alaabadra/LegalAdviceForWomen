
const jwt = require('jsonwebtoken');
const getMyPosts = require('../model/getPosts');
const error = require('../error.js');
exports.get = (req,res)=>{
   jwt.verify(req.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err) res.redirect('/');
        else{
            getMyPosts().then(result=>{
                if(result.rows){
                    res.render('userMyProfile',{
                        resultMyPost:result.rows,
                       
                    });
                }
            }).catch(err=> error.server(err));
        }
    })
}