$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll <= 50) {
      $("nav.menu").addClass("transparent");
  } else {
      $("nav.menu").removeClass("transparent");
  }
});