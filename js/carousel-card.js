const productCarousel02 = tns({
  container: ".card .carousel-list",
  controlsContainer: ".card .carousel-control-btn",
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
      items: 4,
    },
  },
});
