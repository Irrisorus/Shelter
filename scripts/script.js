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
let petButton=document.querySelector(".pet-button")
let popup=document.querySelector(".popup")
let popupClose=document.querySelector(".popup__close")
let popupContent=document.querySelector(".popup__content")
burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");

    
    
   
})
petButton.addEventListener("click",()=>{
    popup.classList.add("popup_active")
})
popupClose.addEventListener("click",()=>{
   
    popup.classList.remove("popup_active")
})
popup.addEventListener("click",(e)=>{
    let click=e.composedPath().includes(popupContent)
    if(!click){
        popup.classList.remove('popup_active');
    }
})
