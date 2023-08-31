"use strict";


setTimeout(() => {
    document.body.classList.add("loaded_hiding");
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 500);
  }, 3000);
  

// Select all slides
addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
    
    // select next slide button
    const nextSlide = document.querySelector(".btn-next");
    
    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;
    
    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
      // check if current slide is the last and reset current slide
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
    
      //   move slide by -100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
    
    // select next slide button
    const prevSlide = document.querySelector(".btn-prev");
    
    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
      // check if current slide is the first and reset current slide to last
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
    
      //   move slide by 100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
})


