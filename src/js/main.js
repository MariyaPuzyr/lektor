$(document).ready(function () {
  /*!
  # Responsive Celendar widget script
  # by w3widgets
  #
  # Author: Lukasz Kokoszkiewicz
  #
  # Copyright © w3widgets 2013 All Rights Reserved
*/
  (function(){(function(c){var d,b,a;d=function(f,e){var g;this.$element=f;this.options=e;this.weekDays=["sun","mon","tue","wed","thu","fri","sat","sun"];this.time=new Date();this.currentYear=this.time.getFullYear();this.currentMonth=this.time.getMonth();if(this.options.time){g=this.splitDateString(this.options.time);this.currentYear=g.year;this.currentMonth=g.month}this.initialDraw();return null};d.prototype={addLeadingZero:function(e){if(e<10){return"0"+e}else{return""+e}},applyTransition:function(e,f){e.css("transition",f);e.css("-ms-transition","-ms-"+f);e.css("-moz-transition","-moz-"+f);return e.css("-webkit-transition","-webkit-"+f)},applyBackfaceVisibility:function(e){e.css("backface-visibility","hidden");e.css("-ms-backface-visibility","hidden");e.css("-moz-backface-visibility","hidden");return e.css("-webkit-backface-visibility","hidden")},applyTransform:function(f,e){f.css("transform",e);f.css("-ms-transform",e);f.css("-moz-transform",e);return f.css("-webkit-transform",e)},splitDateString:function(g){var e,i,h,f;h=g.split("-");f=parseInt(h[0]);i=parseInt(h[1]-1);e=parseInt(h[2]);return h={year:f,month:i,day:e}},initialDraw:function(){return this.drawDays(this.currentYear,this.currentMonth)},editDays:function(g){var h,f,j,i,e;e=[];for(h in g){j=g[h];this.options.events[h]=g[h];i=this.splitDateString(h);f=this.$element.find('[data-year="'+i.year+'"][data-month="'+(i.month+1)+'"][data-day="'+i.day+'"]').parent(".day");f.removeClass("active");f.find(".badge").remove();f.find("a").removeAttr("href");if(this.currentMonth===i.month||this.options.activateNonCurrentMonths){e.push(this.makeActive(f,j))}else{e.push(void 0)}}return e},clearDays:function(k){var h,g,j,i,f,e;e=[];for(i=0,f=k.length;i<f;i++){h=k[i];delete this.options.events[h];j=this.splitDateString(h);g=this.$element.find('[data-year="'+j.year+'"][data-month="'+(j.month+1)+'"][data-day="'+j.day+'"]').parent(".day");g.removeClass("active");g.find(".badge").remove();e.push(g.find("a").removeAttr("href"))}return e},clearAll:function(){var g,k,h,j,f,e;this.options.events={};k=this.$element.find('[data-group="days"] .day');e=[];for(h=j=0,f=k.length;j<f;h=++j){g=k[h];c(g).removeClass("active");c(g).find(".badge").remove();e.push(c(g).find("a").removeAttr("href"))}return e},setMonthYear:function(e){var f;f=this.splitDateString(e);this.currentMonth=this.drawDays(f.year,f.month);return this.currentYear=f.year},prev:function(){if(this.currentMonth-1<0){this.currentYear=this.currentYear-1;this.currentMonth=11}else{this.currentMonth=this.currentMonth-1}this.drawDays(this.currentYear,this.currentMonth);if(this.options.onMonthChange){this.options.onMonthChange.call(this)}return null},next:function(){if(this.currentMonth+1>11){this.currentYear=this.currentYear+1;this.currentMonth=0}else{this.currentMonth=this.currentMonth+1}this.drawDays(this.currentYear,this.currentMonth);if(this.options.onMonthChange){this.options.onMonthChange.call(this)}return null},curr:function(){this.currentYear=this.time.getFullYear();this.currentMonth=this.time.getMonth();this.drawDays(this.currentYear,this.currentMonth);if(this.options.onMonthChange){this.options.onMonthChange.call(this)}return null},addOthers:function(f,g){var e;if(typeof g==="object"){if(g.number!=null){e=c("<span></span>").html(g.number).addClass("badge");if(g.badgeClass!=null){e.addClass(g.badgeClass)}f.append(e)}if(g.url){f.find("a").attr("href",g.url)}}return f},makeActive:function(f,k){var h,l,g,j,e;if(k){if(k["class"]){h=k["class"].split(" ");for(g=j=0,e=h.length;j<e;g=++j){l=h[g];f.addClass(l)}}else{f.addClass("active")}f=this.addOthers(f,k)}return f},getDaysInMonth:function(e,f){return new Date(e,f+1,0).getDate()},drawDay:function(o,p,j,f,h){var n,k,m,l,e,g;l=c("<div></div>").addClass("day");k=new Date();k.setHours(0,0,0,0);e=new Date(p,j-1,f);if(e.getTime()<k.getTime()){g="past"}else{if(e.getTime()===k.getTime()){g="today"}else{g="future"}}l.addClass(this.weekDays[h%7]);l.addClass(g);m=p+"-"+this.addLeadingZero(j)+"-"+this.addLeadingZero(f);if(f<=0||f>o){n=new Date(p,j-1,f);f=n.getDate();j=n.getMonth()+1;p=n.getFullYear();l.addClass("not-current").addClass(g);if(this.options.activateNonCurrentMonths){m=p+"-"+this.addLeadingZero(j)+"-"+this.addLeadingZero(f)}}l.append(c("<a>"+f+"</a>").attr("data-day",f).attr("data-month",j).attr("data-year",p));if(this.options.monthChangeAnimation){this.applyTransform(l,"rotateY(180deg)");this.applyBackfaceVisibility(l)}l=this.makeActive(l,this.options.events[m]);return this.$element.find('[data-group="days"]').append(l)},drawDays:function(o,u){var p,s,f,j,w,n,r,t,h,x,y,l,q,k,m,e,g,v;q=this;k=new Date(o,u);p=k.getMonth();y=k.getMonth()+1;e=k.getFullYear();k.setDate(1);r=this.options.startFromSunday?k.getDay()+1:k.getDay()||7;h=this.getDaysInMonth(o,u);m=0;if(this.options.monthChangeAnimation){j=this.$element.find('[data-group="days"] .day');for(t=g=0,v=j.length;g<v;t=++g){s=j[t];w=t*0.01;this.applyTransition(c(s),"transform .5s ease "+w+"s");this.applyTransform(c(s),"rotateY(180deg)");this.applyBackfaceVisibility(c(s));m=(w+0.1)*1000}}f=2;if(this.options.allRows){x=42}else{l=Math.ceil((r-(f-1)+h)/7);x=l*7}this.$element.find("[data-head-year]").html(k.getFullYear());this.$element.find("[data-head-month]").html(this.options.translateMonths[k.getMonth()]);n=function(){var z,i;q.$element.find('[data-group="days"]').empty();z=f-r;t=q.options.startFromSunday?0:1;while(z<x-r+f){q.drawDay(h,e,y,z,t);z=z+1;t=t+1}i=function(){var B,A;j=q.$element.find('[data-group="days"] .day');for(t=B=0,A=j.length;B<A;t=++B){s=j[t];q.applyTransition(c(s),"transform .5s ease "+(t*0.01)+"s");q.applyTransform(c(s),"rotateY(0deg)")}if(q.options.onDayClick){q.$element.find('[data-group="days"] .day a').click(function(){return q.options.onDayClick.call(this,q.options.events)})}if(q.options.onDayHover){q.$element.find('[data-group="days"] .day a').hover(function(){return q.options.onDayHover.call(this,q.options.events)})}if(q.options.onActiveDayClick){q.$element.find('[data-group="days"] .day.active a').click(function(){return q.options.onActiveDayClick.call(this,q.options.events)})}if(q.options.onActiveDayHover){return q.$element.find('[data-group="days"] .day.active a').hover(function(){return q.options.onActiveDayHover.call(this,q.options.events)})}};return setTimeout(i,0)};setTimeout(n,m);return p}};c.fn.responsiveCalendar=function(g,i){var h,f,e;f=c.extend({},c.fn.responsiveCalendar.defaults,typeof g==="object"&&g);e={next:"next",prev:"prev",edit:"editDays",clear:"clearDays",clearAll:"clearAll",getYearMonth:"getYearMonth",jump:"jump",curr:"curr"};h=function(k){var j;f=c.metadata?c.extend({},f,k.metadata()):f;k.data("calendar",(j=new d(k,f)));if(f.onInit){f.onInit.call(j)}return k.find("[data-go]").click(function(){if(c(this).data("go")==="prev"){j.prev()}if(c(this).data("go")==="next"){return j.next()}})};return this.each(function(){var k,j;k=c(this);j=k.data("calendar");if(!j){h(k)}else{if(typeof g==="string"){if(e[g]!=null){j[e[g]](i)}else{j.setMonthYear(g)}}else{if(typeof g==="number"){j.jump(Math.abs(g)+1)}}}return null})};c.fn.responsiveCalendar.defaults={translateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],events:{},time:void 0,allRows:true,startFromSunday:false,activateNonCurrentMonths:false,monthChangeAnimation:true,onInit:void 0,onDayClick:void 0,onDayHover:void 0,onActiveDayClick:void 0,onActiveDayHover:void 0,onMonthChange:void 0};a=c('[data-spy="responsive-calendar"]');if(a.length){b={};if((a.data("translate-months"))!=null){b.translateMonths=a.data("translate-months").split(",")}if((a.data("time"))!=null){b.time=a.data("time")}if((a.data("all-rows"))!=null){b.allRows=a.data("all-rows")}if((a.data("start-from-sunday"))!=null){b.startFromSunday=a.data("start-from-sunday")}if((a.data("activate-non-current-months"))!=null){b.activateNonCurrentMonths=a.data("activate-non-current-months")}if((a.data("month-change-animation"))!=null){b.monthChangeAnimation=a.data("month-change-animation")}return a.responsiveCalendar(b)}})(jQuery)}).call(this);

  /* slider */
  if ($(".single-item").length > 0) {
    $('.single-item').slick({
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            arrows: false
          }
        }
      ]
    });
  }
  /* slider end */


  /* countdown */
  if ($(".countdown").length > 0) {
    $('.countdown').each(function () {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime("<span class='countdown-item'>" + '%D' + "<span class='countdown-title'>дней</span></span>" + "<span class='countdown-item'>" + '%H' + "<span class='countdown-title'>часов</span></span>" + "<span class='countdown-item'>" + '%M' + "<span class='countdown-title'>минут</span></span>" + "<span class='countdown-item'>" + '%S' + "<span class='countdown-title'>секунд</span></span>"));
      });
    });
  }
  /* countdown end*/

  /* calendar */
  if ($(".training-list__calendar").length > 0) {
    $(".training-list__calendar").responsiveCalendar({
      time: '2019-07',
      translateMonths: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      events: {
        "2019-07-15": {
          "number": 245,
          "dayEvents": [
            {
              "name": "Important meeting",
              "hour": "17:30"
            },
            {
              "name": "Morning meeting at coffee house",
              "hour": "08:15"
            }
          ]
        },
        "2019-07-30": {
          "number": 2,
          "dayEvents": [
            {
              "name": "Important meeting",
              "hour": "17:30"
            },
            {
              "name": "Morning meeting at coffee house",
              "hour": "08:15"
            }
          ]
        },
        "2019-08-02": {
          "number": 3,
          "dayEvents": [
            {
              "name": "Important meeting",
              "hour": "17:30"
            },
            {
              "name": "Morning meeting at coffee house",
              "hour": "08:15"
            },
            {
              "name": "Morning meeting at coffee house",
              "hour": "08:15"
            }
          ]
        }
      },
      monthChangeAnimation: false
    });
  }
  /* calendar end*/

  /* calendar slider */
  if ($(".training-list__slider").length > 0) {
    $('.training-list__slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  /* calendar slider end*/

  /* calendar countdown */
  if ($(".training-item__countdown").length > 0) {
    $('.training-item__countdown').each(function () {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function (event) {
        $this.html(event.strftime('%I' + "<span class='countdown-title'>часов</span>" + '%M' + "<span class='countdown-title'>минут</span>"));
      });
    });
  }
  /* calendar countdown end*/

  /* training archive countdown */
  !function(t){t.extend(t.easing,{spincrementEasing:function(t,a,e,n,r){return a===r?e+n:n*(-Math.pow(2,-10*a/r)+1)+e}}),t.fn.spincrement=function(a){function e(t,a){if(t=t.toFixed(a),a>0&&"."!==r.decimalPoint&&(t=t.replace(".",r.decimalPoint)),r.thousandSeparator)for(;o.test(t);)t=t.replace(o,"$1"+r.thousandSeparator+"$2");return t}var n={from:0,to:null,decimalPlaces:null,decimalPoint:".",thousandSeparator:",",duration:1e3,leeway:50,easing:"spincrementEasing",fade:!0,complete:null},r=t.extend(n,a),o=new RegExp(/^(-?[0-9]+)([0-9]{3})/);return this.each(function(){var a=t(this),n=r.from;a.attr("data-from")&&(n=parseFloat(a.attr("data-from")));var o;if(a.attr("data-to"))o=parseFloat(a.attr("data-to"));else if(null!==r.to)o=r.to;else{var i=t.inArray(r.thousandSeparator,["\\","^","$","*","+","?","."])>-1?"\\"+r.thousandSeparator:r.thousandSeparator,l=new RegExp(i,"g");o=parseFloat(a.text().replace(l,""))}var c=r.duration;r.leeway&&(c+=Math.round(r.duration*(2*Math.random()-1)*r.leeway/100));var s;if(a.attr("data-dp"))s=parseInt(a.attr("data-dp"),10);else if(null!==r.decimalPlaces)s=r.decimalPlaces;else{var d=a.text().indexOf(r.decimalPoint);s=d>-1?a.text().length-(d+1):0}a.css("counter",n),r.fade&&a.css("opacity",0),a.animate({counter:o,opacity:1},{easing:r.easing,duration:c,step:function(t){a.html(e(t*o,s))},complete:function(){a.css("counter",null),a.html(e(o,s)),r.complete&&r.complete(a)}})})}}(jQuery);
  /* training archive countdown end */

  /* training archive countdown init */
  if ($(".training-archive__list").length > 0) {
    var show = true;
    var countbox = ".training-archive__list";
    $(window).on("scroll load resize", function () {
      if (!show) return false;
      var w_top = $(window).scrollTop();
      var e_top = $(countbox).offset().top;
      var w_height = $(window).height();
      var d_height = $(document).height();
      var e_height = $(countbox).outerHeight();
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
        $('.training-archive__item--count').css('opacity', '1');
        $('.training-archive__item--count').spincrement({
          thousandSeparator: "",
          duration: 1200
        });

        show = false;
      }
    });
    /* training archive countdown init end */
  }

  /* registration form */
  if ($(".placeholder").length > 0) {
    $(".placeholder + .registration-form-control").keyup(function () {
      if ($(this).val().length) {
        $(this).prev('.placeholder').hide();
      } else {
        $(this).prev('.placeholder').show();
      }
    });
    $(".placeholder").click(function () {
      $(this).next().focus();
    });

    $('.registration-form-control').each(function (i, input) {
      if(!input.value.length) return;
      $(input).prev('.placeholder').hide()
    })

  }
  /* registration form end*/

  /* init tooltip */
  $('[data-toggle="tooltip"]').tooltip();
  /* init tooltip end*/
  if ($(".banner-slider").length > 0) {
    $('.banner-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            adaptiveHeight: true,
            arrows: false
          }
        }
      ]
    });
  }

  if ($(".archive-item__dropdown").length > 0) {
    $('.archive-item__dropdown').click(function () {
      $(this).next().toggle();
    });
  }

  $(document).on('click', '.day a', function () {
    var result =  $(this).data('day') + $(this).data('month') + $(this).data('year');
    console.log(result);
  });


  /* add tags */

  /* filter referrals */
  var $grid = $('.grid').isotope({
    itemSelector: '.referrals-items',
    layoutMode: 'fitRows'
  });

// bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

// change is-checked class on buttons
  $('.filter-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

  /* filter referrals end */
  if ($(".write-message__link").length > 0) {
    $('.write-message__link').click(function () {
      $('.write-message').find('.write-message__form').addClass('active');
      $(this).hide();
    });

    $('.reset-btn').click(function () {
      $('.write-message').find('.write-message__form').removeClass('active');
      $('.write-message__link').show();
    });

    $('.message-item__content').click(function () {
      $('.message-item').removeClass('open');
      $(this).parents('.message-item').addClass('open');
    });

    $('.send-btn').click(function () {
      $('.write-message').find('.write-message__form').removeClass('active');
      $('.success-info').addClass('active');
    });
  }

  /* clock picker init */
  if ($(".clockpicker").length > 0) {
    $('.clockpicker').clockpicker({
      placement: 'bottom',
      align: 'left'
    });
  }
  /* clock picker init end*/
});