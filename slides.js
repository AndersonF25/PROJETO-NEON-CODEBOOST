/* function slide responsivo */

/* function width(){
  let width = window.innerWidth;

 if(width > 289 && width<= 510){
  let swiper = new Swiper(".slider-depoimentos", {
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  return swiper
 }else if(width >= 510 && width < 829){
  let swiper = new Swiper(".slider-depoimentos", {
    slidesPerView: 2,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  return swiper
 }else if(width > 830){
  let swiper = new Swiper(".slider-depoimentos", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
  return swiper
 }
}

window.addEventListener('resize', width); */

function configureSwiper() {
  const width = window.innerWidth;
  let slidesPerView = 1;

  if (width > 289 && width <= 510) {
    slidesPerView = 1;
  } else if (width >= 510 && width < 829) {
    slidesPerView = 2;
  } else if (width > 830) {
    slidesPerView = 3;
  }

  return new Swiper(".slider-depoimentos", {
    slidesPerView,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });
}

function updateSwiper() {
  configureSwiper();
}

window.addEventListener('resize', updateSwiper);

// Inicializar o swiper ao carregar a página
window.addEventListener('load', configureSwiper);
