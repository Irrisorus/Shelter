new Swiper(".swiper",{
   

    slidesPerView:3,
    draggable:true,
    navigation:{

        nextEl: ".arrow_right",
        prevEl:".arrow_left",
    },
    breakpoints:{
        1:{
            slidesPerView:1,
            // autoplay:{
            //     delay:3000,
            //     disableOnInteraction:false,
            // },
        },
            768:{
                slidesPerView:2,
                
            },
       
        1230:{
            slidesPerView:3,
            
        },
       
    },
    

    
 
   
    
});

let burgerMenu=document.querySelector(".header__menu-burger");
let headerMenu=document.querySelector(".header__top-menu")

burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");

    
    
   
})