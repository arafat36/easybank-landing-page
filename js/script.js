var menuBurger = document.querySelector(".menu-burger");
var navList = document.querySelector(".navigation__nav-list");

menuBurger.addEventListener('click', e => { 
    console.log(e);
    menuBurger.classList.toggle("menu-open");
    navList.classList.toggle("menu-open");
})