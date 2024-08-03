document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#offerCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
  
    carousel.addEventListener('slide.bs.carousel', function(e) {
      const nextElement = e.relatedTarget;
      const index = [...items].indexOf(nextElement);
  
      items.forEach((item, i) => {
        item.style.opacity = i === index ? '1' : '0';
        item.style.transition = 'opacity 1s ease-in-out';
      });
    });
  });
  