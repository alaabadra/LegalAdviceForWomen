
exports.verifyBeforeSignup = (req,res,next)=>{//verify before sign up to sure this person before that not login
 const jwt = require('jsonwebtoken');   
    if(req.cookies && req.cookies.jwt){//if person login(exist in db) before that(two cases=>this person play in cookie or this person fogot that he sign up before it)
       jwt.verify(req.cookies.jwt,process.env.SECRET,(err,decCookie)=>{//
            if(err){//if person has cookie (login before that) and play in jwt
                res.clearCookie('jwt');
                res.send('unauthorized');
            }
            //if person has cookie (login before that) but dont play in jwt , only forgot that he sign up before that
            if(req.cookie.consultant){
                res.redirect('/consProfile');
            }else{
                res.redirect('/homeUser');
            }
        })
    }else{//this person is allowing sign up
        res.render('home');
        next();

    }

}