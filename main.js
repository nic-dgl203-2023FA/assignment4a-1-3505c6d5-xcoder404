const menubtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');


let showMenu = false;

menubtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');

        showMenu = true;
    }else{
        hamburger.classList.remove('open');

        showMenu = false;
    }
}