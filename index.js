  $('.navbar-toggler').on('click', function(e) {
    $('.navbar-brand').toggleClass("d-none d-lg-block"); //you can list several class names
    e.preventDefault();
  });

//1s for carousel
  $(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000  // 1 seconds
  });
