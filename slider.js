document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelectorAll('.slide');
  
  if (!gallery || !prevBtn || !nextBtn) return;
  
  // Calculate scroll amount based on slide width
  function getScrollAmount() {
    if (slides.length === 0) return gallery.offsetWidth * 0.8;
    
    const firstSlide = slides[0];
    const slideWidth = firstSlide.offsetWidth;
    const slideMargin = parseInt(window.getComputedStyle(firstSlide).marginRight) || 0;
    return slideWidth + slideMargin;
  }
  
  // Previous button click
  prevBtn.addEventListener('click', function() {
    gallery.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });
  });
  
  // Next button click
  nextBtn.addEventListener('click', function() {
    gallery.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    });
  });
  
  // Optional: Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    }
  });
  
  // Optional: Show/hide buttons based on scroll position
  function updateButtonVisibility() {
    const scrollLeft = gallery.scrollLeft;
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    
    // Show/hide previous button
    if (scrollLeft <= 10) {
      prevBtn.style.opacity = '0.5';
      prevBtn.style.pointerEvents = 'none';
    } else {
      prevBtn.style.opacity = '1';
      prevBtn.style.pointerEvents = 'auto';
    }
    
    // Show/hide next button
    if (scrollLeft >= maxScrollLeft - 10) {
      nextBtn.style.opacity = '0.5';
      nextBtn.style.pointerEvents = 'none';
    } else {
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'auto';
    }
  }
  
  // Update button visibility on scroll
  gallery.addEventListener('scroll', updateButtonVisibility);
  
  // Initial button visibility check
  updateButtonVisibility();
  
  // Update on window resize
  window.addEventListener('resize', updateButtonVisibility);
});