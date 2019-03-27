const error = require('../error.js');
const jwt = require('jsonwebtoken');
const addAns = require('../model/addAns.js');
const getPosts = require('../model/getPosts');

exports.get=(req,res)=>{
    jwt.verify(req.cookie.jwt,process.env.SECRET,(err,token)=>{
        if(err) return res.redirect('/');
        else{
            getPosts().then(result=>{
                if(result.rows){
                     res.render('consAnsIn',{
                title:result.rows[0].title,
                content: result.rows[0].content
            });  
                }
                
            })
         
        }
    });
}

exports.post = (req,res)=>{
    const {writeAnsCosn}=req.body;
    addAns(writeAnsCosn).then(result=>{
        if(result.rows[0]){
            return res.send({msg:'add your Answer successfully'})
        }else{
            res.send({msg:'dont add successfully , please try again add'})
        }
    }).catch(err=>error.server(err));
}