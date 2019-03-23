const error = require('../error.js');
const jwt = require('jsonwebtoken');
const getMyPosts = require('../model/getMyPosts.js');


exports.get=(req,res)=>{
    verify(req.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err) res.redirect('/');
        else{
            getMyPosts().then(result=>{
                if(result.rows){
                    res.render('homeUser',{
                        resultRights:result.rows
                    })
                }
            }).catch(err=>error.server(err));
        }
    })
}