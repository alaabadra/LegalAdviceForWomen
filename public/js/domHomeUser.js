const logout = document.querySelector('.logOut');
const main = document.querySelector('.main');
const userQ = document.querySelector('.rightsConsultants');
const previousQuestions = document.querySelector('.previousQuestions');
const myPage = document.querySelector('.myPage');
logout.addEventListener('click',()=>{
    window.location.href = '/logout'
});
main.addEventListener('click',()=>{
    window.location.href = '/homeUser'
});
userQ.addEventListener('click',()=>{
    window.location.href = '/userQIn'
});
previousQuestions.addEventListener('click',()=>{
    window.location.href = '/userPrevQ'
});
myPage.addEventListener('click',()=>{
    window.location.href = '/userMyProfile'
});