const addUser = require('../model/addUser.js');
const error = require('../error.js');
exports.addUserSignup = (req,res)=>{

    addUser(req.body.userName,req.body.password).then(result=>{
        if(result){
            res.render('home',{
                msg:'signup successfull'
            })
        }
    }).catch(err=>error.server(err,req,res,null));
}
