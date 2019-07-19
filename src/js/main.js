$(document).ready(function () {
  /* slider */
  $('.single-item').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 1
  });
  /* slider end */


  /* countdown */
  $('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime("<span class='countdown-item'>"+ '%D'+"<span class='countdown-title'>дней</span></span>" + "<span class='countdown-item'>"+ '%H'+"<span class='countdown-title'>часов</span></span>" + "<span class='countdown-item'>"+ '%M'+"<span class='countdown-title'>минут</span></span>" + "<span class='countdown-item'>"+ '%S'+"<span class='countdown-title'>секунд</span></span>"));
    });
  });
});