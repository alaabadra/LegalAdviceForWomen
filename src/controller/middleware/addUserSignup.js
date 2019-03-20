const addUser = require('../model/addUser.js');
const error = require('../error.js');
exports.addUserSignup = (req,res)=>{

    addUser(req.userName,req.password).then(result=>{
        if(result){
            res.render('home',{
                msg:'add successfull'
            })
        }
    }).catch(err=>error.server(err,req,res,null));
}