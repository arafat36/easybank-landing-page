var menuBurger = $(".menu-burger");
var navList = $(".navigation__nav-list");
console.log(menuBurger[0].classList)
console.log(navList)
menuBurger.on('click', e => {
    console.log(e);
    menuBurger[0].classList.toggle("menu-open");
    navList[0].classList.toggle("menu-open");
})