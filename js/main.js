// slider

const swiper = new Swiper('.swiper', {
  slidesPerView : 1.55 ,
  spaceBetween: 50,
  freeMode: true,
  grabCursor: true,
  // mousewheel:{
  //   sensitivity: 1,
  //   eventsTarget: ".themes",
  //   releaseOnEdges: true,
  // }
  navigation:{
    nextEl: '.arrow-right',
    prevEl: '.arrow-left'
  },
});

// AOS animations

document.addEventListener('DOMContentLoaded', () => {
  const desktopOffsetPercent = 60;
  const mobileOffsetPercent = 30;
  const isMobile = window.innerWidth <= 992;
  const offsetPx = window.innerHeight * ((isMobile ? mobileOffsetPercent : desktopOffsetPercent) / 100);
  AOS.init({
      offset: offsetPx,
      once: true,
  });
});