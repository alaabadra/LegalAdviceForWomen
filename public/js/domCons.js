const btnSubmitCons = document.getElementById('btnSubmit');
const  answerCons = document.getElementById('subject');
const msg = document.querySelector('.msg');
btnSubmitCons.addEventListener('click',event=>{
    event.preventDefault();
   const sendDataCons = {
      writeAnsCosn: subjectCons.value
   }
    fetch('/userQIn',{
        method:'POST',
        body:JSON.stringify(sendDataCons)
    }),(err,result)=>{
        if(err) return new TypeError(err);
        else{
            return msg.textContent = result;
        }
    }

});