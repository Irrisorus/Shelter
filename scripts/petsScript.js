let burgerMenu=document.querySelector(".header__menu-burger");
let headerMenu=document.querySelector(".header__top-menu")
let logoTitile=document.querySelector(".logo__title")
let logoSubtitile=document.querySelector(".logo__subtitle")
burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");
    logoTitile.classList.toggle("logo__title_active");
    logoSubtitile.classList.toggle("logo__subtitle_active");
    
   
})