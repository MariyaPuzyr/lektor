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
  $('[data-countdown]').each(function () {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function (event) {
      $this.html(event.strftime("<span class='countdown-item'>" + '%D' + "<span class='countdown-title'>дней</span></span>" + "<span class='countdown-item'>" + '%H' + "<span class='countdown-title'>часов</span></span>" + "<span class='countdown-item'>" + '%M' + "<span class='countdown-title'>минут</span></span>" + "<span class='countdown-item'>" + '%S' + "<span class='countdown-title'>секунд</span></span>"));
    });
  });
  /* countdown end*/

  /* calendar */
  (function ($) {

    function calendarWidget(el, params) {

      var now = new Date();
      var thismonth = now.getMonth();
      var thisyear = now.getYear() + 1900;

      var opts = {
        month: thismonth,
        year: thisyear
      };

      $.extend(opts, params);

      var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var dayNames = ['1', '2', '3', '4', '5', '6', '7'];
      month = i = parseInt(opts.month);
      year = parseInt(opts.year);
      var m = 0;
      var table = '';

      // next month
      if (month == 11) {
        var next_month = '<a href="?month=' + 1 + '&amp;year=' + (year + 1) + '" title="' + monthNames[0] + ' ' + (year + 1) + '">' + monthNames[0] + ' ' + (year + 1) + '</a>';
      } else {
        var next_month = '<a href="?month=' + (month + 2) + '&amp;year=' + (year) + '" title="' + monthNames[month + 1] + ' ' + (year) + '">' + monthNames[month + 1] + ' ' + (year) + '</a>';
      }

      // previous month
      if (month == 0) {
        var prev_month = '<a href="?month=' + 12 + '&amp;year=' + (year - 1) + '" title="' + monthNames[11] + ' ' + (year - 1) + '">' + monthNames[11] + ' ' + (year - 1) + '</a>';
      } else {
        var prev_month = '<a href="?month=' + (month) + '&amp;year=' + (year) + '" title="' + monthNames[month - 1] + ' ' + (year) + '">' + monthNames[month - 1] + ' ' + (year) + '</a>';
      }

      table += ('<h3 id="current-month">' + monthNames[month] + ' ' + year + '</h3>');
      // uncomment the following lines if you'd like to display calendar month based on 'month' and 'view' paramaters from the URL
      //table += ('<div class="nav-prev">'+ prev_month +'</div>');
      //table += ('<div class="nav-next">'+ next_month +'</div>');
      table += ('<table class="calendar-month " ' + 'id="calendar-month' + i + ' " cellspacing="0">');

      table += '<tr>';

      for (d = 0; d < 7; d++) {
        table += '<th class="weekday">' + dayNames[d] + '</th>';
      }

      table += '</tr>';

      var days = getDaysInMonth(month, year);
      var firstDayDate = new Date(year, month, 1);
      var firstDay = firstDayDate.getDay();

      var prev_days = getDaysInMonth(month, year);
      var firstDayDate = new Date(year, month, 1);
      var firstDay = firstDayDate.getDay();

      var prev_m = month == 0 ? 11 : month - 1;
      var prev_y = prev_m == 11 ? year - 1 : year;
      var prev_days = getDaysInMonth(prev_m, prev_y);
      firstDay = (firstDay == 0 && firstDayDate) ? 7 : firstDay;

      var i = 0;
      for (j = 0; j < 42; j++) {

        if ((j < firstDay)) {
          table += ('<td class="other-month"><span class="day">' + (prev_days - firstDay + j + 1) + '</span></td>');
        } else if ((j >= firstDay + getDaysInMonth(month, year))) {
          i = i + 1;
          table += ('<td class="other-month"><span class="day">' + i + '</span></td>');
        } else {
          table += ('<td class="current-month day' + (j - firstDay + 1) + '"><span class="day">' + (j - firstDay + 1) + "<span class='count'>456654<span>" + '</span></td>');
        }
        if (j % 7 == 6) table += ('</tr>');
      }

      table += ('</table>');

      el.html(table);
    }

    function getDaysInMonth(month, year) {
      var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((month == 1) && (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
        return 29;
      } else {
        return daysInMonth[month];
      }
    }


    // jQuery plugin initialisation
    $.fn.calendarWidget = function (params) {
      calendarWidget(this, params);
      return this;
    };

  })(jQuery);


  var colors = ['#CB5050', '#44ADE1', '#60C84F', '#E07B57'];
  var nowColor = 0;
  var deg = 0;
  var now = new Date();
  var thismonth = now.getMonth();
  var thisyear = now.getYear() + 1900;
  init();

  function init() {
    var nowMonth = $('.calendar-2').calendarWidget({
      month: thismonth,
      year: thisyear
    });
    $('.calendar-head .ct').text(thisyear + thismonth);
  }

  function next() {
    thismonth = turnMonth(thismonth, 'add');
    var nowMonth = findNext().addClass('current').calendarWidget({
      month: thismonth,
      year: thisyear
    });
    setHead(nowMonth);
    rotate(-120);
  }

  function prev() {
    thismonth = turnMonth(thismonth, 'sub');
    var nowMonth = findPrev().addClass('current').calendarWidget({
      month: thismonth,
      year: thisyear
    });
    setHead(nowMonth);
    rotate(120);
  }

  $('.prev').click(function () {
    prev();
  });
  $('.next').click(function () {
    next();
  });

  function setHead(nowMonth) {
    $('.calendar-head').addClass('animate');
    setTimeout(function () {
      $('.calendar-head').removeClass('animate')
    }, 300);
    $('.calendar-head .ct').text(eval('(' + nowMonth + ')').year + '  ' + eval('(' + nowMonth + ')').month);
  }

  function rotate(num) {
    deg = deg + num;
    $('.day-list').css({'transform': 'rotateY(' + deg + 'deg)', '-webkit-transform': 'rotateY(' + deg + 'deg)'});
  }

  function turnMonth(month, flag) {
    if (flag == 'add')
      month++;
    else
      month--;
    if (month == 12) {
      month = 0;
      thisyear++;
    }
    if (month == -1) {
      month = 11;
      thisyear--;
    }
    return month;

  }

  function findNext() {
    var id = $('.current').attr('data');
    $('.current').removeClass('current');
    switch (id) {
      case '1':
        return $('.calendar-2');
      case '2':
        return $('.calendar-3');
      case '3':
        return $('.calendar-1');
    }
  }

  function findPrev() {
    var id = $('.current').attr('data');
    $('.current').removeClass('current');
    switch (id) {
      case '1':
        return $('.calendar-3');
      case '2':
        return $('.calendar-1');
      case '3':
        return $('.calendar-2');
    }
  }
  /* calendar end*/

  /* calendar slider */
  $('.training-list__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /* calendar slider end*/
});