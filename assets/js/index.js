//Обработка кнопки бургера
const buttonBurger = document.querySelector(".header__burger");
const header = document.querySelector(".header")
buttonBurger.addEventListener("pointerdown", () => {
    buttonBurger.classList.toggle("active-burger");
    header.classList.toggle("active-burger");
});
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        buttonBurger.classList.remove("active-burger");
        header.classList.remove("active-burger");
    }
})
//==============================================================

//активация User меню
const menuButton = document.querySelector(".header__admin-nav");
const userMenu = document.querySelector(".header__admin-items")
menuButton.addEventListener("pointerdown", () => {
    userMenu.classList.toggle("active-menu")
});
//==============================================================

//деактивация User меню
document.addEventListener("pointerdown", (e) => {
    if (!e.target.classList.contains("header__admin-nav")) {
        userMenu.classList.remove("active-menu");
    }
});
//==============================================================

//Эффекты нажатия кнопок
const buttons = document.querySelectorAll(".button");
buttons.forEach((item) => {
    item.addEventListener("pointerdown", buttonDown);
    item.addEventListener("pointerup", buttonUp);
    item.addEventListener("pointerover", buttonUp);
    item.addEventListener("pointerout", buttonOut);
});

let arrows = document.querySelectorAll(".slider-exlusive__arrow");
arrows.forEach((item) => {
    item.addEventListener("pointerdown", buttonDown);
    item.addEventListener("pointerup", buttonUp);
    item.addEventListener("pointerover", buttonUp);
    item.addEventListener("pointerout", buttonOut);
    if (item.classList.contains("slider-exlusive__arrow_next")) {
        item.addEventListener("pointerdown", nextSlide);
    }
    if (item.classList.contains("slider-exlusive__arrow_prev")) {
        item.addEventListener("pointerdown", prevSlide);
    }
});
function buttonDown() {
    this.style.transform = "scale(0.9)";
    if (!this.classList.contains("slider-exlusive__arrow")) {
        this.style.boxShadow = "0 0 3px 1px rgba(0, 0, 0, 0.418)";
    }
    else if (this.classList.contains("slider-exlusive__arrow_next")) {
        this.style.boxShadow = "-1px -1px 1px rgba(0, 0, 0, 0.3)";
    }
    else if (this.classList.contains("slider-exlusive__arrow_prev")) {
        this.style.boxShadow = "1px 1px 1px rgba(0, 0, 0, 0.3)";
    }
}
function buttonUp() {
    this.style.transform = "scale(1.1)";
    if (!this.classList.contains("slider-exlusive__arrow")) {
        this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.418)";
    }
    else if (this.classList.contains("slider-exlusive__arrow_next")) {
        this.style.boxShadow = "-3px -3px 3px rgba(0, 0, 0, 0.3)";
    }
    else if (this.classList.contains("slider-exlusive__arrow_prev")) {
        this.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.3)";
    }
}
function buttonOut() {
    this.style.transform = "scale(1)";
    this.style.boxShadow = "none";
}
//=============================================================

//Слайдер для ппервого блока
let currentPosition = 0;
const sliders = document.querySelectorAll(".slider-exlusive__body");
sliders[currentPosition].style.display = "flex";
sliders[currentPosition].style.opacity = "1";
function nextSlide() {
    sliders[currentPosition].style.display = "none";
    sliders[currentPosition++].style.opacity = "0";
    if (currentPosition > sliders.length - 1) {
        currentPosition = 0;
    }
    sliders[currentPosition].style.display = "flex";
    sliders[currentPosition].style.opacity = "1";
    sliders[currentPosition].style.animation = "actionSlide  ease 1s  1 ";
}
function prevSlide() {
    sliders[currentPosition--].style.display = "none";
    if (currentPosition < 0) {
        currentPosition = sliders.length - 1;
    }
    sliders[currentPosition].style.display = "flex";
    sliders[currentPosition].style.opacity = "1";
    sliders[currentPosition].style.animation = "actionSlide  ease 1s  1 ";
}
//=============================================================

//Слайдер для лотов============================================
const buttonPrev = document.querySelector(".popular-slider__arrows_prev");
const buttonNext = document.querySelector(".popular-slider__arrows_next");
const buttonsControl = document.querySelectorAll(".popular-slider__arrows");
let slideContainer= document.querySelector(".popular-slider__container");
let slides = document.querySelectorAll(".popular-slider__slide");
let cloneSlide;
let countSlide;
let x;
//Адаптивность под ширину браузера
window.onload = cheсkWidth;
window.onresize = cheсkWidth;
//События кнопок
buttonPrev.addEventListener("pointerdown",slidePrev);
buttonNext.addEventListener("pointerdown", slideNext);



function cheсkWidth(){
    if (window.innerWidth > 992) {
        countSlide = 2;
    }
    if (window.innerWidth >= 480 && window.innerWidth <= 992) {
        countSlide = 1;
    }
    if (window.innerWidth < 480) {
        countSlide = 0;
    }
    slides.forEach((item, index) => {
        (index > countSlide) ?  item.style.display = "none" : item.style.display = "flex";
    });
}
function slideNext(e){
    slides = document.querySelectorAll(".popular-slider__slide");
    slideContainer.append(slides[0]);
    slides.forEach((item) => {
        item.classList.add("animationRight");
        item.addEventListener("webkitAnimationEnd",()=>{
        item.classList.remove("animationRight");
        })
    })
    cheсkWidth();
}
function slidePrev(e){
    slides = document.querySelectorAll(".popular-slider__slide");
    slideContainer.prepend(slides[slides.length - 1]);
    slides.forEach((item) => {
        item.classList.add("animationLeft");
        item.addEventListener("webkitAnimationEnd",()=>{
            item.classList.remove("animationLeft");
        })
    })
    cheсkWidth();
}
// slideContainer.addEventListener("pointerdown", (event)=>{
//     event.stopPropagation();
//     x = event.x ;
//     slideContainer.addEventListener("pointermove",(e) =>{
//         if( (x - e.clientX) > 0){
//             slideNext();
//         }
//         if( (x - e.clientX) < 0){
        
//             slidePrev();
//         }
//     })
// })
// slideContainer.addEventListener("pointerup",()=>{
// slideContainer.removeEventListener("pointermove", slideNext);
// slideContainer.removeEventListener("pointermove", slidePrev);
// })
//=============================================================================

//Слайдер для цитат============================================
const quotSliderButton = document.querySelector(".quotes-slider__button");
let quotSlider = document.querySelector(".quotes-slider__container");
let quotSlides = document.querySelectorAll(".quotes-slide");
quotSlides.forEach((item) => { item.style.opacity = "0" })
quotSlides[0].style.opacity = "1";
//Обработка кноки
quotSliderButton.addEventListener("pointerdown", () => {
    quotSlides = document.querySelectorAll(".quotes-slide");
    quotSlides.forEach((item) => { item.style.opacity = "0"; });
    quotSlides[1].style.transform = "translateX(-950px)";
    quotSlides[1].style.opacity = "1";
    setTimeout(() => {
        quotSlider.append(quotSlides[0]);
        quotSlides[0].style.opacity = "0";
        quotSlides[1].style.transform = "translateX(0)";
    }, 500)

    quotSliderButton.style.animation = "rotateButton 0.5s ease 1";
});
quotSliderButton.addEventListener("animationend", () => {
    quotSliderButton.style.animation = "none";
})

//=============================================================

//=============================================================================
//quotSlides[0].classList.remove("absolute")