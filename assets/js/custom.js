/* ==========================================================================
   Li Yu Lab - Custom JavaScript
   Scroll animations, back-to-top, and interactive features
   ========================================================================== */

(function() {
  'use strict';

  // ==========================================================================
  // Back to Top Button
  // ==========================================================================

  function initBackToTop() {
    // Create the button if it doesn't exist
    if (!document.querySelector('.back-to-top')) {
      var btn = document.createElement('button');
      btn.className = 'back-to-top';
      btn.innerHTML = '↑';
      btn.setAttribute('aria-label', 'Back to top');
      btn.setAttribute('title', 'Back to top');
      document.body.appendChild(btn);

      btn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;

    var threshold = 400;

    window.addEventListener('scroll', function() {
      if (window.scrollY > threshold) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });
  }

  // ==========================================================================
  // Scroll-triggered Animations (Intersection Observer)
  // ==========================================================================

  function initScrollAnimations() {
    var elements = document.querySelectorAll('.animate-on-scroll');

    if (elements.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      elements.forEach(function(el) {
        el.classList.add('animated');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ==========================================================================
  // Smooth anchor scroll for same-page links
  // ==========================================================================

  function initSmoothScroll() {
    document.addEventListener('click', function(e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;

      var id = target.getAttribute('href').slice(1);
      if (!id) return;

      var el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ==========================================================================
  // Navbar shrink on scroll
  // ==========================================================================

  function initNavbarShrink() {
    var masthead = document.querySelector('.masthead');
    if (!masthead) return;

    var scrollThreshold = 80;

    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
        masthead.classList.add('masthead--scrolled');
      } else {
        masthead.classList.remove('masthead--scrolled');
      }
    }, { passive: true });
  }

  // ==========================================================================
  // Initialize on DOM ready
  // ==========================================================================

  function init() {
    initBackToTop();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarShrink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();