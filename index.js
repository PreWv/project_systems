// BURGER
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.header__burger_close');
const menuBurger = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('nav__mobile_active');
});

  menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('nav__mobile_active');
});

// SLIDER
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    loop: true,
  	speed: 1500,
    
  	autoplay: {
      enabled: true,
      delay: 5000,
      disableOnInteraction: false,
	  },

    a11y: false,
  });

  // TABS
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.steps__btn').forEach(function (e) {
      e.addEventListener('click', function (e) {
        const tab = e.currentTarget.dataset.path;

        document.querySelectorAll('.works__tab').forEach(function (e) {
          e.classList.remove('works__tab_active')
          document.querySelector(`[data-target='${tab}']`).classList.add('works__tab_active');
        });
      });
  
      e.addEventListener('click', function (e) {
        const tabSteps = e.currentTarget.dataset.steps;
        document.querySelectorAll('.steps__btn').forEach(function (e) {
          e.classList.remove('steps__btn_active')
          document.querySelector(`[data-path='${tabSteps}']`).classList.add('steps__btn_active');
        });
      });
  
    });
  });
  

  // ACCORDION
  $( function() {
    $( "#accordion" ).accordion({
      active: 'false',
      collapsible: 'true',
      heightStyle: 'content',
    });
  } );