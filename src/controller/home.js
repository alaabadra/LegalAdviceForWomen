// exports.get = (req, res) => res.send('Server is runnig now');
exports.get = (req, res) => {
    res.render('home',{
        js:'domHomeSignup',
        css:'loginsignup', 
        msg:''
    })
};