let burgerMenu=document.querySelector(".header__menu-burger");
let headerMenu=document.querySelector(".header__top-menu")
let logoTitile=document.querySelector(".logo__title")
let logoSubtitile=document.querySelector(".logo__subtitle")
let slidesForSwiper = Array.from(document.querySelectorAll(".swiper-slide"))
let prevButton= document.querySelector(".button_swiper_left")
let nextButton= document.querySelector(".button_swiper_rigth")
let prevEndButton= document.querySelector(".button_swiper_left-end")
let nextEndButton= document.querySelector(".button_swiper_rigth-end")
let SwiperButtons=document.querySelectorAll(".button_swiper")
console.log(slidesForSwiper);


slidesForSwiper.forEach((el)=>{
    if(slidesForSwiper[0].classList.contains("swiper-slide-active")){
        prevEndButton.classList.add("swiper-button-disabled")
        console.log("aaa")
    }
    else{
        prevEndButton.classList.remove("swiper-button-disabled")
    }
})

// SwiperButtons.forEach((el)=>{
//     el.addEventListener("click", ()=>{
//         if(slidesForSwiper[1].classList.contains("swiper-slide-active")){
//             prevEndButton.classList.add("swiper-button-disabled")
//             console.log("aaa")
//         }
       
//     })
// })

new Swiper(".swiper",{

    navigation:{

        nextEl:".button_swiper_rigth",
        prevEl:".button_swiper_left"
    },
    slidesPerView:4,
    

    breakpoints:{
        0:{
            slidesPerView:1,
            
        },
        768:{
            slidesPerView:2,
            
        },
        1230:{
            slidesPerView:4,
           
        }
    }
   
    
});

burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");
    logoTitile.classList.toggle("logo__title_active");
    logoSubtitile.classList.toggle("logo__subtitle_active");
    
   
})