$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    dots: false,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});
