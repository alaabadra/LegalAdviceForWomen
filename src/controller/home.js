// exports.get = (req, res) => res.send('Server is runnig now');
exports.get = (req, res) => {
    res.render('home',{
        js:'loginsignup',
        // css:'loginsignup', 
        msg:'welcome in our website'
    })
};