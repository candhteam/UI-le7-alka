$(function () {
    $(".text").typed({
      strings:["We have 2x open roles in the Asia-Pacific! Take a look.", "Keep an eye out for Counterbrace, our new social research lab launching soon."],
      typeSpeed: 20,
      backSpeed: 20,
      backDelay: 1000,
      showCursor: false,
      loop: true
    });
  });

  gsap.registerPlugin(ScrollTrigger);



  // --- image zoom ---
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".animationWrapper",
      scrub: true,
      pin: true,
      
      start: "0% 0%",
      end: "+=70%"
    }
  })
  
  .to(".scaling", {
    scale: 2.0, 
    ease: "out",

  })
  // --- image zoom  ends---
 

  //-----slider------
  let isDown = false;
  let startX;
  let scrollLeft;
  const slider = document.querySelector('.our-latest__slider-wrapper');
  
  const end = () => {
    isDown = false;
    slider.classList.remove('active');
  }
  
  const start = (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;	
  }
  
  const move = (e) => {
    if(!isDown) return;
  
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
  }
  
  (() => {
    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);
  
    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);
  
    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);
  })();
   //-----slider------