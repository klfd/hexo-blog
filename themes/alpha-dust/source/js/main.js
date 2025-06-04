// Alpha Dust Theme JavaScript
// Main JavaScript file for theme functionality

(function($) {
  'use strict';

  // Document ready
  $(document).ready(function() {
    
    // Mobile menu toggle
    $('.mobile-nav-toggle').on('click', function() {
      $('.nav-menu').toggleClass('active');
    });

    // Smooth scrolling for anchor links
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
      } else {
        $('.back-to-top').fadeOut();
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });

    // Image gallery lightbox
    if (typeof featherlight !== 'undefined') {
      $('.gallery img').featherlight();
    }

    // Search functionality
    $('.search-toggle').on('click', function() {
      $('.search-form').toggleClass('active');
      $('.search-input').focus();
    });

    // Close search on escape key
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.search-form').removeClass('active');
      }
    });

  });

})(jQuery);
