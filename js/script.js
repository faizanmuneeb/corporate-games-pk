$(document).ready(function () {
  $(".main-slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow:
      '<img src="images/slider-arrow.svg" class="slider-arrow prev-arrow">',
    nextArrow:
      '<img src="images/slider-arrow.svg" class="slider-arrow next-arrow">',
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".main-header").addClass("active");
    } else {
      $(".main-header").removeClass("active");
    }
  });
});
