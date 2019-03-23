
const jwt = require('jsonwebtoken');
const getMyAns = require('../model/getMyAns');
const error = require('../error.js');
exports.get = (req,res)=>{
   jwt.verify(req.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err) res.redirect('/');
        else{
            getMyAns().then(result=>{
                if(result.rows){
                    res.render('consProfile',{
                        resultMyAns:result.rows,
                       
                    });
                }
            }).catch(err=> error.server(err));
        }
    })
}