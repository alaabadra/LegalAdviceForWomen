const btnSubmitUser = document.getElementById('btnSubmit');
const title = document.getElementById('title');
const  subject = document.getElementById('subject');
const msg = document.querySelector('.msg');

btnSubmitUser.addEventListener('click',event=>{
    event.preventDefault();
   const sendData = {
      writeTitle: title.value,
      writeSubject: subject.value
   }
    fetch('/userQIn',{
        method:'POST',
        body:JSON.stringify(sendData)
    }),(err,result)=>{
        if(err) return new TypeError(err);
        else{
            return msg.textContent = result;
        }
    }

});