new Swiper(".swiper",{
   

    
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
let popupImage=document.querySelector(".popup__image")
let popupName=document.querySelector(".popup__title")
let popupKind=document.querySelector(".popup__subtitle")
let popupText=document.querySelector(".popup__text")
let popupAgeInfo=document.querySelector(".popup__age")
let popupInoculInfo=document.querySelector(".popup__inoculations")
let popupDeseasInfo=document.querySelector(".popup__diseases")
let popupParasitesInfo=document.querySelector(".popup__parasites")
let animals = [ 
    { name: 'Jennifer', type: 'Dog - Labrador', 
    info: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age:"2 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-jennifer.png)",
},
   { name: 'Sophia', type: 'Dog - Shih tzu', 
    info: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age:"4 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-sophia.png)",
},
{ name: 'Woody', type: 'Dog - Labrador', 
    info: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age:"3.5 years",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-woody.png)",
},
{ name: 'Scarlett', type: 'Dog - Jack Russell Terrier', 
    info: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age:"5 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-scarlet.png)",
},
{ name: 'Katrine', type: 'Cat - British Shorthair', 
    info: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age:"1.2 years",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-katrine.png)",
},
{ name: 'Timmy', type: 'Cat - British Shorthair', 
    info: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age:"8 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-timmy.png)",
},
{ name: 'Freddie', type: 'Cat - British Shorthair', 
    info: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age:"1 months",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-freddie.png)",
},
{ name: 'Charly', type: 'Dog - Jack Russell Terrier ', 
    info: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age:"3 years",
    Inoculations: "none",
    Diseases: "none",
    Parasites:"none",
    Image:"url(../assets/img/pets-charly.png)",
},
];


burgerMenu.addEventListener('click',()=>{
  
    console.log("aaaa")
    burgerMenu.classList.toggle("header__menu-burger_active");
    headerMenu.classList.toggle("header__top-menu_active");

    
    
   
})
petButton.addEventListener("click",()=>{
    let randNumb=Math.floor(Math.random() * 8);
    
    ChangePopupEntrails(animals,randNumb);
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

function ChangePopupEntrails(arr,index) {
    popupName.textContent=arr[index].name;
    popupKind.textContent=arr[index].type;
    popupText.textContent=arr[index].info;
    popupAgeInfo.textContent=arr[index].age;
    popupInoculInfo.textContent=arr[index].Inoculations;
    popupDeseasInfo.textContent=arr[index].Diseases;
    popupParasitesInfo.textContent=arr[index].Parasites;
    popupImage.style.backgroundImage=arr[index].Image;

}