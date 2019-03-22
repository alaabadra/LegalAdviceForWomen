
exports.signupValidation = (req,res)=>{
    const { userName,password ,confirmPassword}= req.body;
if(!userName.trim() || ! password.trim() || !confirmPassword){
    res.render('home',{
        msg:'you must fill all fields'
    });
    
}
if(userName.includes(' ')){
    res.render('home',{
        msg:'you must do not spaces between char username'
    });
}
if(userName.length<5||userName.length>10){
    res.render('home',{
        msg:'you must length username on the less 5 and on the greater 10'
    });
}
if(password.length()<5||password.length()>10){
    res.render('home',{
        msg:'you must length password on the less 5 and on the greater 10'
    });
}
if(password.trim !== confirmPassword.trim()){
    res.render('home',{
        msg:'you must make sure password same confirm Password'
    });
}

}
exports.signinValidation = (req,res)=>{
    const { userName,password }= req.body;
if(!userName.trim() || ! password.trim() ){
    res.render('home',{
        msg:'you must fill all fields'
    });
    
}
if(userName.includes(' ')){
    res.render('home',{
        msg:'you must do not spaces between char username'
    });
}
if(userName.length<5||userName.length>10){
    res.render('home',{
        msg:'you must length username on the less 5 and on the greater 10'
    });
}
if(password.length()<5||password.length()>10){
    res.render('home',{
        msg:'you must length password on the less 5 and on the greater 10'
    });
}


}