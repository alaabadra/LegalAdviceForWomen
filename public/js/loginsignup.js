const submitButton = document.querySelector('.submit-btn');
const inputUserName = document.querySelector('.inputUserName');
const inputPassword = document.querySelector('.inputPassword');
const confirmPassword = document.querySelector('.confirmPassword');
const message = document.querySelector('.msg')
submitButton.addEventListener('click',event=>{
    event.preventDefault();
    const requestData = {
        userName:inputUserName.value,
        password :inputPassword.value
        
    }
    fetch('/signup',
    {
        method:'POST',
        body:JSON.stringify(requestData)
    },(err,result)=>{
        if(err) return new TypeError(err);
        else {
            return message.textContent = result;
        }
    });
    

})