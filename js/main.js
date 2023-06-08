//HERO SLIDER
$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText: ["PREV", "NEXT"],
    dots: false,
    responsive: {
      0: { nav: false },
      768: { nav: true },
      1000: {},
    },
  });
});

//PROJECT SLIDER
$(document).ready(function () {
  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 1000,
    dots: false,
    margin: 24,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: { items: 1, nav: false, margin: 0 },
      768: { items: 2 },
      1140: { items: 2, center: true, dots: true },
    },
  });
});

$(document).ready(function () {
  $("#reviews-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 800,
  });
});
