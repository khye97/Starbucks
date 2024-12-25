const productCarousel01 = tns({
  container: ".coffee-bean .carousel-list",
  controlsContainer: ".coffee-bean .carousel-control-btn",
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  gutter: 20,
  loop: false,
  touch: true,
  nav: false,
  responsive: {
    768: {
      items: 2,
    },
  },
});
