
const jwt = require('jsonwebtoken');
const getPrevQ = require('../model/getPosts');
const error = require('../error.js');
exports.get = (req,res)=>{
   jwt.verify(req.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err) res.redirect('/');
        else{
            getPrevQ().then(result=>{
                if(result.rows){
                    res.render('userPrevQ',{
                        resultPost:result.rows,
                       
                    });
                }
            }).catch(err=> error.server(err));
        }
    })
}