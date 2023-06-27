let burgerBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');
burgerBtn.addEventListener('click', function(e){
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});


