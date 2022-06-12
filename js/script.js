$(document).ready(onDocumentReady);

function onDocumentReady() {
  initializeMainSlider();

  $(window).on("scroll", onWindowScroll);
  $(".move-to-top-button").click(function () {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  });
}

function initializeMainSlider() {
  $(".main-slider").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow:
      '<img src="images/slider-arrow.svg" class="slider-arrow prev-arrow">',
    nextArrow:
      '<img src="images/slider-arrow.svg" class="slider-arrow next-arrow">',
  });
}

function onWindowScroll() {
  handleMainHeaderOnScroll();
  handleMoveToTopOnScroll();
}

function handleMainHeaderOnScroll() {
  if ($(window).scrollTop() > 10) {
    $(".main-header").addClass("active");
  } else {
    $(".main-header").removeClass("active");
  }
}

function handleMoveToTopOnScroll() {
  if ($(window).scrollTop() > screen.height - 200) {
    $(".move-to-top-button").css("display", "block");
  } else {
    $(".move-to-top-button").css("display", "none");
  }
}
