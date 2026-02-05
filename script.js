// Rest Police Landing Page
// Minimal JS for smooth interactions

(function() {
  'use strict';

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, null, targetId);
      }
    });
  });

  // Subtle fade-in animations on scroll
  if ('IntersectionObserver' in window) {
    const animateOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animateOnScroll.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    // Add animation class and observe elements
    document.querySelectorAll('.feature-card, .step, .privacy-item, .faq-item').forEach(el => {
      el.classList.add('animate-on-scroll');
      animateOnScroll.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .step.animate-on-scroll { transition-delay: 0.1s; }
      .step:nth-child(2).animate-on-scroll { transition-delay: 0.2s; }
      .step:nth-child(3).animate-on-scroll { transition-delay: 0.3s; }
      .step:nth-child(4).animate-on-scroll { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
  }

})();
