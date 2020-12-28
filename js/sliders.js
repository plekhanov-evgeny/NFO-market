var mySwiper = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  })
  
    window.mySwiper2 = new Swiper('.swiper2', {
      // Optional parameters
      direction: 	`horizontal`,
      loop: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoplay: {
          delay: 500000000,
        },
        on: {
          init() {
            this.el.addEventListener('mouseenter', () => {
              this.autoplay.stop();
            });
      
            this.el.addEventListener('mouseleave', () => {
              this.autoplay.start();
            });
          }
        },
    
      // If we need pagination
     
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-nexti',
        prevEl: '.swiper-button-previ',
      },
    
      // And if we need scrollbar
      
    })
  
  
  
    var mySwiper3 = new Swiper('.swiper3', {
      // Optional parameters
      direction: 	`horizontal`,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 30,
     autoplay: {
          delay: 5000,
        },
        
      // If we need pagination
     
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-nexti',
        prevEl: '.swiper-button-previ',
      },
    
      // And if we need scrollbar
      
    });