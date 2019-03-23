const logout = document.querySelector('.logOut');
const main = document.querySelector('.main');
const myPage = document.querySelector('.myPage');
logout.addEventListener('click',()=>{
    window.location.href = '/logout'
});
main.addEventListener('click',()=>{
    window.location.href = '/consQuserAnsIn'
});
myPage.addEventListener('click',()=>{
    window.location.href = '/consProfile'
});