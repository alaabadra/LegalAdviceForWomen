const getUser = require('../model/getUser.js');
const getCons = require('../model/getCons.js')
exports.isUser=(req,res,next)=>{
    getUser(req.body.userName).then(result=>{
        if(result.rows[0]){
            return res.render('home',{
                msg:'this name is exist'
            })
        }else{
            next();
        }
    }).catch(err=>error.server(err,req,res,null))
}

exports.isConsultant = (req,res)=>{
    getCons(req.body.userName).then(result=>{
        if(result.rows[0]){
            return res.render('home',{
                msg:'this name is exist'
            })
        }else{
            next();
        }
    }).catch(err=>error.server(err,req,res,null))
}
// exports.isUserLoginin=(req,res,next)=>{
//     getUser(req.body.userName).then(result=>{
//         if(result.rows[0]){
//             userInfo={
//                 userId:res.rows[0],
//                 consultant: false,
//                 loggrdIn:true
//             }
//             jwt.sign(userInfo,process.env.SECRET,(err,encCookie)=>{
//                 if(encCookie){
//                    return res.redirect('/homeUser')  
//                 }else{
//                     res.render('home',{
//                         msg:'internal server error'
//                     })
//                 }
//             })
           
//         }else{
//             next();
//         }
//     }).catch(err=>error.server(err,req,res,null))
// }
// exports.isConsLogin = (req,res)=>{
//     getCons(req.body.userName).then(result=>{
//         if(result.rows[0]){
//             userInfo={
//                 userId:res.rows[0],
//                 consultant: true,
//                 loggrdIn:true
//             }
//             jwt.sign(userInfo,process.env.SECRET,(err,encCookie)=>{
//                 if(encCookie){
//                    return res.redirect('/consProfile')  
//                 }else{
//                     res.render('home',{
//                         msg:'internal server error'
//                     })
//                 }
//             })
//         }else{
//             res.render('home',{
//                 msg:'you user not found in website so you must make signup'
//             })
//         }
//     }).catch(err=>error.server(err,req,res,null))
// }