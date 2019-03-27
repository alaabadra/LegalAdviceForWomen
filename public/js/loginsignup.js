const submitButton = document.querySelector('.submit-btn');
const inputUserName = document.querySelector('.inputUserName');
const inputPassword = document.querySelector('.inputPassword');
const confirmPassword = document.querySelector('.confirmPassword');
const Name = document.querySelector('.inputConsName');
const Password = document.querySelector('.passwordCons');

const message = document.querySelector('.msg')
submitButton.addEventListener('click',event=>{
    event.preventDefault();
    const requestDataSignup = {
        userName:inputUserName.value,
        password :inputPassword.value
        
    }
    fetch('/signup',
    {
        method:'POST',
        body:JSON.stringify(requestDataSignup)
    },(err,result)=>{
        if(err) return new TypeError(err);
        // else {
        //     return message.textContent = 'signup successfully';
        // }
    });

    const requestDataLogin = {
        Name:Name.value,
        Password :Password.value
        
    }
    fetch('/login',
    {
        method:'POST',
        body:JSON.stringify(requestDataLogin)
    },(err,result)=>{
        if(err) return new TypeError(err);
        else {
            return message.textContent = 'login successfully';
        }
    });
    

})