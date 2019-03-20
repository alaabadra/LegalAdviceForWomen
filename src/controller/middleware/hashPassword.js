const bcrypt = require('bcryptjs');
const error = require('../error.js');
console.log('llllllllllllllllllllll');

exports.hashPassword = (req,res,next)=>{
    console.log('jjjjjjjjjjjjjjj');
    
//   bcrypt.hash(req.body.password,5).then(hashPass=>{
//     if(hashPass){
//         next();
//     }
// }).catch(err=>error.server(err,req,res,null));  
bcrypt.hash(req.body.password,5,(err,hashPass)=>{
    if(hashPass){
        next();
    }else{
        res.render('home',{
            msg:'internal server error'
        })
        
    }
})
}

