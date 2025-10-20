// assets/js/swiper-init.js
document.addEventListener('DOMContentLoaded', function () {
  // Pastikan Swiper sudah diload
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper not found. Include swiper-bundle.min.js before swiper-init.js');
    return;
  }
  
  // ---------------------------
  // Swiper untuk Artikel Terbaru
  // ---------------------------
  const articleEl = document.querySelector('.articleSwiper');
  if (articleEl) {
    const articleSwiper = new Swiper(articleEl, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});

  
  

