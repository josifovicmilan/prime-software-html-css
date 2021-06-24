'use strict';


const carouselSlides = document.querySelector('.carousel__slides');
const carouselSlide = document.querySelectorAll('.carousel__slide');
const carouselCircles = document.querySelectorAll('.carousel__circle');
const nav = document.querySelector('.carousel__nav');

let counter = 1;

const carouselSlideWidth = carouselSlide[0].clientWidth;

carouselCircles.forEach((item,index) => {
    item.addEventListener('click', ()=>{
        carouselCircles.forEach(circle => 
            {
                circle.style.backgroundColor = '#715a6a'
            });
       carouselSlides.style.transform = `translateX(${-carouselSlideWidth * index}px)`;
       item.style.backgroundColor = '#e1e1e1';
    })
})