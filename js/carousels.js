const productCarousel = tns({
  container: ".coffee-bean .carousel-list",
  controlsContainer: ".carousel-control-btn",
  controls: true,
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: true,
  gutter: 20,
  // items: 1,
  loop: false,
  touch: true,

  responsive: {
    768: {
      items: 2,
    },
  },
});
