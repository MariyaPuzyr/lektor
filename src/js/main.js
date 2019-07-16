/* slider */
$('.single-item').slick({
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
});
/* slider end */
